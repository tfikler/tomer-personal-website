import { VercelRequest, VercelResponse } from '@vercel/node';
import { blobServiceClient } from '../config/azure-config';
import { getFileFromAzureContainer } from '../services/azure/azure-storage';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        console.log(req)
        const sasUrl = await getFileFromAzureContainer(
            blobServiceClient,
            'images',
            'personal-picture.svg'
        );
        res.json({ sasUrl });
    } catch (error) {
        console.error("Error generating SAS URL:", error);
        res.status(500).send("Server Error");
    }
}