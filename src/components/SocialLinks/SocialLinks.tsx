import React from 'react';
import {Box, IconButton, SvgIcon, Tooltip} from '@mui/material';
import {Facebook, GitHub, LinkedIn, ContactPage} from '@mui/icons-material';
import {logEvent} from "../../../ga4.ts";

const SocialLinks: React.FC = () => {
    const vercelUrl = import.meta.env.VITE_VERCEL_URL;
    //const localUrl = 'http://localhost:3000';
    const [cv, setCv] = React.useState<any>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${vercelUrl}/api/cv.ts`);
                const data = await response.json();
                setCv(data.cv);
            } catch (error) {
                console.error('Error fetching CV:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mr: 6,
                '@media (max-width: 768px)': {
                    flexDirection: 'row',
                },
            }}
        >
            <Tooltip title={"GitHub"} placement={"right"}>
            <IconButton
                className="social-icon-button"
                href="https://github.com/tfikler"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mb: 2 }}
            >
                <GitHub />
            </IconButton>
            </Tooltip>
            <Tooltip title={"LinkedIn"} placement={"right"}>
            <IconButton
                className="social-icon-button"
                href="https://www.linkedin.com/in/tomer-fikler/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mb: 2 }}
            >
                <LinkedIn />
            </IconButton>
            </Tooltip>
            <Tooltip title={"Stack Overflow"} placement={"right"}>
            <IconButton
                className="social-icon-button"
                href="https://stackoverflow.com/users/22898189/tomer-fikler"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mb: 2 }}
            >
                <SvgIcon fontSize="small">
                    <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
                </SvgIcon>
            </IconButton>
            </Tooltip>
            <Tooltip title="Facebook" placement="right">
            <IconButton
                className="social-icon-button"
                href="https://facebook.com/tomer.fikler"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mb: 2 }}
            >
                <Facebook/>
            </IconButton>
            </Tooltip>
            <Tooltip title="Download CV" placement="right">
            <IconButton
                className="social-icon-button"
                onClick={async () => {
                    const response = await fetch(cv);
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", "Tomer_Fikler_CV.pdf"); // Set the file name
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                    logEvent('Download', 'CV');
                }}
                sx={{ mb: 2 }}
            >
                <ContactPage/>
            </IconButton>
            </Tooltip>
        </Box>
    );
};

export default SocialLinks;