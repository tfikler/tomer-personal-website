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
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    maxWidth: '800px',
                    width: '100%',
                    p: 8,
                    borderRadius: 4,
                    bgcolor: 'white',
                    display: 'flex',
                    alignItems: 'flex-start',
                }}
            >
                <SocialLinks />
                <Box sx={{ flex: 1, ml: 6 }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '2.5rem', sm: '3rem' },
                        }}
                    >
                        Hi there, I'm Tomer Fikler
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                            fontSize: { xs: '1rem', sm: '1.125rem' },
                        }}
                    >
                        I'm a full-stack software engineer with a BSc in Computer Science from Reichman University, where I graduated with honors. I have a passion for creating web applications that drive real-world results.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 6 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            href="/projects"
                            sx={{ mr: 2, py: 2, px: 4, fontSize: '1rem' }}
                        >
                            View My Projects
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            href="/contact"
                            sx={{ py: 2, px: 4, fontSize: '1rem' }}
                        >
                            Get in Touch
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default Home;