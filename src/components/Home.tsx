import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import SocialLinks from './SocialLinks/SocialLinks.tsx';

const Home: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '80vh',
                marginBottom: 8,
                fontFamily: 'Poppins, sans-serif',
                px: { xs: 2, sm: 4, md: 6 }, // Add padding on mobile
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    maxWidth: '800px',
                    width: '100%',
                    p: { xs: 4, sm: 6, md: 8 }, // Adjust padding based on screen size
                    borderRadius: 4,
                    bgcolor: 'white',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' }, // Stack on mobile
                    alignItems: 'flex-start',
                }}
            >
                <SocialLinks />
                <Box sx={{ flex: 1, ml: { xs: 0, sm: 6 }, mt: { xs: 4, sm: 0 } }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
                            textAlign: { xs: 'center', sm: 'left' }, // Center-align on mobile
                        }}
                    >
                        Hi there, I'm Tomer Fikler
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' }, // Adjust font size
                            textAlign: { xs: 'center', sm: 'left' },
                            mb: { xs: 4, sm: 0 },
                        }}
                    >
                        I am a software engineer with a BSc in Computer Science from Reichman University, graduating with honors. I am driven by a passion for building innovative applications that deliver real-world impact, leveraging a strong foundation in both front-end and back-end development.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, mt: 4 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            href="#projects"
                            sx={{ mr: 2, py: 1, px: 3, fontSize: { xs: '0.875rem', sm: '1rem' } }} // Adjust button size
                        >
                            View My Projects
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default Home;
