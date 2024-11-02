import { Router } from 'express';
import { blobServiceClient } from '../../config/azure-config';
import { getFileFromAzureContainer } from '../../services/azure/azure-storage';

const router = Router();

router.get('/generate-sas-url', async (_req, res) => {
    try {
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
});

export default router;