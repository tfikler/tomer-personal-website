import express from 'express';
import { BlobServiceClient, StorageSharedKeyCredential, generateBlobSASQueryParameters, BlobSASPermissions } from '@azure/storage-blob';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

// Get environment variables from .env
const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME || '';
const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY || '';


// Set up Azure Storage credentials
const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
const blobServiceClient = new BlobServiceClient(
    `https://${accountName}.blob.core.windows.net`,
    sharedKeyCredential
);

//allow cors
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Route to generate the SAS URL
app.get('/generate-sas-url', async (req: any, res: any) => {
    try {
        const containerClient = blobServiceClient.getContainerClient('images');
        const blobClient = containerClient.getBlobClient('personal-picture.svg');

        // Set expiration for SAS token
        const expiryDate = new Date();
        expiryDate.setHours(expiryDate.getHours() + 1); // Token valid for 1 hour

        // Define SAS token permissions and expiration
        const sasOptions = {
            containerName: containerClient.containerName,
            blobName: blobClient.name,
            permissions: BlobSASPermissions.parse("r"), // Read-only permission
            expiresOn: expiryDate,
        };

        // Generate SAS token
        const sasToken = generateBlobSASQueryParameters(sasOptions, sharedKeyCredential).toString();
        const sasUrl = `${blobClient.url}?${sasToken}`;
        console.log(req.toString())
        // Send the SAS URL as a JSON response
        res.json({ sasUrl });
    } catch (error) {
        console.error("Error generating SAS URL:", error);
        res.status(500).send("Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
