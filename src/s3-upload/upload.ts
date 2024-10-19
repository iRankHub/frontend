import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const s3Client = new S3Client({
    endpoint: process.env.NEXT_PUBLIC_LINODE_ENDPOINT,
    region: process.env.NEXT_PUBLIC_LINODE_REGION,
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_LINODE_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.NEXT_PUBLIC_LINODE_SECRET_ACCESS_KEY || '',
    },
});
/**
 * Uploads a file to Linode's S3-compatible storage and returns the URL.
 * @param file The file to upload.
 * @param bucketName The name of the bucket to upload to.
 * @param customKey An optional custom key for the file. If not provided, the file's name will be used.
 * @returns The URL of the uploaded file.
 */

interface UploadResult {
    success: boolean;
    message: string;
    url?: string;
}

export async function uploadToLinode(
    file: File,
    bucketName: string,
): Promise<UploadResult> {
    try {
        const fileExtension = path.extname(file.name);
        const key = `${uuidv4()}${fileExtension}`;

        const params = {
            Bucket: bucketName,
            Key: key,
            Body: file,
            ContentType: file.type,
            ACL: 'public-read',
        };

        const command = new PutObjectCommand({
            ...params,
            ACL: 'public-read' as const
        });
        await s3Client.send(command);

        // construct the URL
        const fileUrl = `https://${bucketName}.${process.env.NEXT_PUBLIC_LINODE_REGION}.linodeobjects.com/${encodeURIComponent(key)}`;

        return {
            success: true,
            message: "File uploaded successfully",
            url: fileUrl,
        };
    } catch (error) {
        console.error("Error uploading file:", error);
        return {
            success: false,
            message: "Failed to upload file",
        };
    }
}
