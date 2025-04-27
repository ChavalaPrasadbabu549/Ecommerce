import React from 'react';
import { Container, Divider, Grid } from '@mui/material';
import CustomTypography from './CustomTypography';
import CustomButton from './CustomButton';
import { useNavigate } from "react-router-dom";
import CategoryCard from './CategoryCard';



const Topcategories = ({ categories }) => {
    const navigate = useNavigate()
    return (
        <section className='category-section'>
            <Container maxWidth="xl">
                <div className='category-content'>
                    <CustomTypography label="SHOP FROM" variant="h6" className="category-text-h6">
                        <span>TOP CATEGORIES</span>
                    </CustomTypography>
                    <CustomButton type="navigate" label="View All" onClick={() => navigate('/categories')} className="view-btn" />
                </div>
                <Divider />
                <Grid container spacing={2}>
                    {categories.map((category, index) => (
                        <Grid key={index} item size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                            <CategoryCard category={category} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section >
    )
}

export default Topcategories