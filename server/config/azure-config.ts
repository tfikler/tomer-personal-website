import dotenv from 'dotenv';
import { BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob';

dotenv.config();

// Load the environment variables
const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME || '';
const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY || '';

// Set up the shared key credential
export const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);

// Initialize the BlobServiceClient
export const blobServiceClient = new BlobServiceClient(
    `https://${accountName}.blob.core.windows.net`,
    sharedKeyCredential
);