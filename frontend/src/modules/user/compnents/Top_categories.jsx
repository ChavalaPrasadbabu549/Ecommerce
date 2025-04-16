import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import Grid from "@mui/material/Grid2";

const Topcategories = ({ categories }) => {
    return (
        <Container maxWidth="xl">
            <Box style={{ padding: '20px' }}>
                <Grid container alignItems="center" justifyContent="space-between" style={{ marginBottom: "20px" }}>
                    <Typography variant="h6" style={{ fontWeight: 600 }}>
                        SHOP FROM <span style={{ color: '#f7b500' }}>TOP CATEGORIES</span>
                    </Typography>
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: '#f7b500',
                            color: '#000',
                            fontWeight: 600,
                            textTransform: 'none',
                            padding: '6px 16px',
                            borderRadius: '4px',
                        }}
                    >
                        VIEW ALL
                    </Button>
                </Grid>

                {/* Categories */}
                <Grid container spacing={2} justifyContent="flex-start">
                    {categories.map((category, index) => (
                        <Grid key={index} item size={{ xs: 12, sm: 12, md: 12, lg: 2 }}>
                            <Box
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Box
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        border: '2px solid #ddd',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden',
                                        marginBottom: '8px',
                                        transition: 'border 0.3s ease',
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.border = '2px solid #f7b500')}
                                    onMouseLeave={(e) => (e.currentTarget.style.border = '2px solid #ddd')}
                                >
                                    <img
                                        src={category.img}
                                        alt={category.name}
                                        style={{
                                            width: '60%',
                                            height: '60%',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </Box>
                                <Typography variant="body2">{category.name}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}

export default Topcategories