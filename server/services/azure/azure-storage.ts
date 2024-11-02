import {
    generateBlobSASQueryParameters,
    BlobSASPermissions,
    ContainerClient,
    BlobClient,
    BlobServiceClient
} from '@azure/storage-blob';
import { sharedKeyCredential } from '../../config/azure-config';

export async function generateSasUrl(containerClient: ContainerClient, blobClient: BlobClient) {
    try {
        // Set expiration for SAS token (1 hour)
        const expiryDate = new Date();
        expiryDate.setHours(expiryDate.getHours() + 1);

        // Define SAS token permissions and expiration
        const sasOptions = {
            containerName: containerClient.containerName,
            blobName: blobClient.name,
            permissions: BlobSASPermissions.parse("r"), // Read-only permission
            expiresOn: expiryDate,
        };

        // Generate SAS token
        const sasToken = generateBlobSASQueryParameters(sasOptions, sharedKeyCredential).toString();
        return `${blobClient.url}?${sasToken}`;
    } catch (error) {
        console.error("Error generating SAS URL:", error);
        throw error;
    }
}

export async function getFileFromAzureContainer(
    blobServiceClient: BlobServiceClient,
    containerName: string,
    blobName: string
) {
    try {
        const containerClient = blobServiceClient.getContainerClient(containerName);
        const blobClient = containerClient.getBlobClient(blobName);
        return await generateSasUrl(containerClient, blobClient);
    } catch (error) {
        console.error("Error getting file from Azure container:", error);
        throw error;
    }
}