import { VercelRequest, VercelResponse } from '@vercel/node';
import { blobServiceClient } from '../config/azure-config';
import { getFileFromAzureContainer } from '../services/azure/azure-storage';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "https://tomerfikler.site"); // Allow only your domain
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        // Handle preflight requests
        res.status(200).end();
        return;
    }

    try {
        const sasUrl = await getFileFromAzureContainer(
            blobServiceClient,
            'images',
            'personal-picture.svg'
        );
        res.status(200).json({ sasUrl });
    } catch (error) {
        console.error("Error generating SAS URL:", error);
        res.status(500).send("Server Error");
    }
}