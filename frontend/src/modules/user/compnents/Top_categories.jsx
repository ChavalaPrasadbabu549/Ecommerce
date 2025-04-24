import React from 'react';
import { Button, Typography, Container, Divider } from '@mui/material';
import Grid from "@mui/material/Grid2";



const Topcategories = ({ categories }) => {
    return (
        <section className='category-section'>
            <Container maxWidth="xl">
                <div className='category-content'>
                    <Typography variant="h6" >
                        SHOP FROM <span>TOP CATEGORIES</span>
                    </Typography>
                    <Button>View All</Button>
                </div>
                <Divider />
                <Grid container spacing={2}>
                    {categories.map((category, index) => (
                        <Grid key={index} item size={{ xs: 12, sm: 12, md: 12, lg: 2 }}>
                            <div className='category-list'>
                                <div className='category-box'
                                    onMouseEnter={(e) => (e.currentTarget.style.border = '2px solid #008ECC')}
                                    onMouseLeave={(e) => (e.currentTarget.style.border = '2px solid #F5F5F5')}
                                >
                                    <img
                                        src={category.img}
                                        alt={category.name}
                                    />
                                </div>
                                <Typography variant="body2">{category.name}</Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    )
}

export default Topcategories