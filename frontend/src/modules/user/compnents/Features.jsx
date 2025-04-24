import React from 'react';
import '../../../styles/features.css'
import { Container, Typography } from '@mui/material';
import Grid from "@mui/material/Grid2";

const Features = ({ featureData }) => {
    return (
        <>
            <Container maxWidth="xl">
                <div className="features-container">
                    <Grid container spacing={1}>
                        {featureData.map((feature, index) => (
                            <Grid key={index} item size={{ xs: 12, sm: 12, md: 12, lg: 3 }}>
                                <div className='features-content'>
                                    <img src={feature.icon} alt="icon" />
                                    <div className='features-content-text'>
                                        <Typography variant='h5'>{feature.title}</Typography>
                                        <Typography>{feature.subtitle}</Typography>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Container >
        </ >
    )
}

export default Features