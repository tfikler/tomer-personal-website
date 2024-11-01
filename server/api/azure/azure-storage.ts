// import {
//     generateBlobSASQueryParameters,
//     BlobSASPermissions,
//     ContainerClient,
//     BlobClient,
//     generateAccountSASQueryParameters
// } from '@azure/storage-blob'
//
// import { configDotenv } from 'dotenv';
// import {BlobServiceClient, StorageSharedKeyCredential} from '@azure/storage-blob'
//
// const envFile = configDotenv({
//     path: '../../.env'
// });
// // Load the environment variables
// const accountName = envFile.parsed?.AZURE_STORAGE_ACCOUNT_NAME || '';
// const accountKey = envFile.parsed?.AZURE_STORAGE_ACCOUNT_KEY || '';
//
//
// // Set up the shared key credential
// // export const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
//
// // Initialize the BlobServiceClient with the account name and shared key credential
// // export const blobServiceClient = new BlobServiceClient(
// //     `https://${accountName}.blob.core.windows.net`,
// //     sharedKeyCredential
// // );
//
//
//
//
//
// const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net${sas}`);
//
// // async function getFileFromAzureContainer(containerName: string, blobName: string) {
// //     try {
// //         // Get a client for the container and the blob
// //         const containerClient = blobServiceClient.getContainerClient(containerName);
// //         const blobClient = containerClient.getBlobClient(blobName);
// //         return await generateSasUrl(containerClient, blobClient);
// //     } catch (error) {
// //         console.error("Error downloading blob content:", error);
// //     }
// // }
// //
// // async function generateSasUrl(containerClient: ContainerClient, blobClient: BlobClient) {
// //     try {
// //         // Set SAS token expiration time (e.g., 1 hour from now)
// //         const expiryDate = new Date();
// //         expiryDate.setHours(expiryDate.getHours() + 1); // Token valid for 1 hour
// //
// //         // Define SAS options with read-only permissions
// //         const sasOptions = {
// //             containerName: containerClient.containerName,
// //             blobName: blobClient.name,
// //             permissions: BlobSASPermissions.parse("r"), // Read-only permissions
// //             expiresOn: expiryDate,
// //         };
// //
// //         // Generate the SAS token
// //         const sasToken = generateBlobSASQueryParameters(sasOptions, sharedKeyCredential).toString();
// //
// //         // Construct the full URL with SAS token
// //         const sasUrl = `${blobClient.url}?${sasToken}`;
// //         console.log("Blob SAS URL:", sasUrl);
// //         return sasUrl;
// //     } catch (error) {
// //         console.error("Error generating SAS URL:", error);
// //     }
// // }
//
// export {getFileFromAzureContainer};
//
