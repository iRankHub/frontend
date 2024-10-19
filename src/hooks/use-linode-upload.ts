// hooks/useLinodeUpload.ts
import { useState } from 'react';
import AWS from 'aws-sdk';

/**
 * @typedef {Object} UseLinodeUploadReturn
 * @property {(file: File, key: string) => Promise<string>} uploadFile - Function to upload a file to Linode Object Storage.
 * @property {number} uploadProgress - The current progress of the file upload (0-100).
 * @property {string | null} uploadError - Error message if the upload fails, null otherwise.
 */
interface UseLinodeUploadReturn {
  uploadFile: (file: File, key: string) => Promise<string>;
  uploadProgress: number;
  uploadError: string | null;
}

/**
 * Custom hook for uploading files to Linode Object Storage.
 * 
 * This hook provides functionality to upload files, track upload progress,
 * and handle upload errors. It uses the AWS SDK to interact with Linode's
 * S3-compatible Object Storage.
 * 
 * @returns {UseLinodeUploadReturn} An object containing the upload function, progress, and error state.
 * 
 * @example
 * const MyComponent = () => {
 *   const { uploadFile, uploadProgress, uploadError } = useLinodeUpload();
 * 
 *   const handleUpload = async (file) => {
 *     try {
 *       const url = await uploadFile(file, `uploads/${file.name}`);
 *       console.log('File uploaded:', url);
 *     } catch (error) {
 *       console.error('Upload failed:', error);
 *     }
 *   };
 * 
 *   return (
 *     <div>
 *       <input type="file" onChange={(e) => handleUpload(e.target.files[0])} />
 *       {uploadProgress > 0 && <progress value={uploadProgress} max={100} />}
 *       {uploadError && <p>Error: {uploadError}</p>}
 *     </div>
 *   );
 * };
 */
const useLinodeUpload = (): UseLinodeUploadReturn => {
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadError, setUploadError] = useState<string | null>(null);

  /**
   * Uploads a file to Linode Object Storage.
   * 
   * @param {File} file - The file to upload.
   * @param {string} key - The key (path) where the file will be stored in the bucket.
   * @returns {Promise<string>} A promise that resolves with the URL of the uploaded file.
   * @throws {Error} If the upload fails.
   */
  const uploadFile = async (file: File, key: string): Promise<string> => {
    // Reset state
    setUploadProgress(0);
    setUploadError(null);

    // Configure the AWS SDK
    const s3 = new AWS.S3({
      endpoint: process.env.NEXT_PUBLIC_S3_ENDPOINT,
      accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY,
      secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_KEY,
      s3ForcePathStyle: true,
      signatureVersion: 'v4',
    });

    // Set up the upload parameters
    const params: AWS.S3.PutObjectRequest = {
      Bucket: process.env.NEXT_PUBLIC_S3_BUCKET!,
      Key: key,
      Body: file,
      ContentType: file.type,
    };

    try {
      // Perform the upload
      const upload = s3.upload(params);

      // Track upload progress
      upload.on('httpUploadProgress', (progress) => {
        const percentage = Math.round((progress.loaded / progress.total) * 100);
        setUploadProgress(percentage);
      });

      // Wait for the upload to complete
      const result = await upload.promise();
      return result.Location; // Return the URL of the uploaded file
    } catch (error) {
      if (error instanceof Error) {
        setUploadError(error.message);
      } else {
        setUploadError('An unknown error occurred');
      }
      throw error;
    }
  };

  return { uploadFile, uploadProgress, uploadError };
};

export default useLinodeUpload;