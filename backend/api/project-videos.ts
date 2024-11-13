import { VercelRequest, VercelResponse } from '@vercel/node';
import { blobServiceClient } from '../config/azure-config';
import {getAllFilesFromAzureContainer, getFileFromAzureContainer} from '../services/azure/azure-storage';

const allowedOrigins = ["https://tomerfikler.site", "http://localhost:5173"];

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const origin = req.headers.origin;

    // Check if the request origin is in the list of allowed origins
    if (origin && allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin); // Dynamically set the origin
    }
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        // Handle preflight requests
        res.status(200).end();
        return;
    }

    try {
        const videos = await getAllFilesFromAzureContainer(
            blobServiceClient,
            'project-videos',
        );
        res.status(200).json({ videos });
    } catch (error) {
        console.error("Error generating SAS URL:", error);
        res.status(500).send("Server Error");
    }
}