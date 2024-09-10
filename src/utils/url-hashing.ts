import CryptoJS from 'crypto-js';

const hashSecret = process.env.NEXT_PUBLIC_HASH_SECRET!;

export function hashUrl(url: string): string {
    return CryptoJS.AES.encrypt(url, hashSecret).toString();
}

export function unhashUrl(hash: string): string {
    const bytes = CryptoJS.AES.decrypt(hash, hashSecret);
    return bytes.toString(CryptoJS.enc.Utf8);
}