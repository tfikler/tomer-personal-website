import { configDotenv } from 'dotenv';
import {BlobServiceClient, StorageSharedKeyCredential} from '@azure/storage-blob'

const envFile = configDotenv({
    path: '../../.env'
});
// Load the environment variables
const accountName = envFile.parsed?.AZURE_STORAGE_ACCOUNT_NAME || '';
const accountKey = envFile.parsed?.AZURE_STORAGE_ACCOUNT_KEY || '';


// Set up the shared key credential
export const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);

// Initialize the BlobServiceClient with the account name and shared key credential
export const blobServiceClient = new BlobServiceClient(
    `https://${accountName}.blob.core.windows.net`,
    sharedKeyCredential
);