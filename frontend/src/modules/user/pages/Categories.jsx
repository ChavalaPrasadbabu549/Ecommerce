import React from 'react';
import '../../../styles/categories.css';
import { useNavigate } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import grocery from '../../../assets/grocery.svg';
import { Container, } from '@mui/material';
import Grid from "@mui/material/Grid";
import CustomBreadcrumbs from '../compnents/CustomBreadcrumbs';
import CategoryCard from '../compnents/CategoryCard';
import CustomPagination from '../compnents/CustomPagination';


const categories = [
    { name: 'Mobile', img: grocery },
    { name: 'Cosmetics', img: grocery },
    { name: 'Electronics', img: grocery },
    { name: 'Furniture', img: grocery },
    { name: 'Watches', img: grocery },
    { name: 'Home Decor', img: grocery },
    { name: 'Kitchen Appliances', img: grocery },
    { name: 'Books', img: grocery },
    { name: 'Toys', img: grocery },
    { name: 'Fitness Equipment', img: grocery },
    { name: 'Gaming', img: grocery },
    { name: 'Fashion', img: grocery },
    { name: 'Jewelry', img: grocery },
    { name: 'Groceries', img: grocery },
    { name: 'Pet Supplies', img: grocery },
    { name: 'Stationery', img: grocery },
    { name: 'Garden Tools', img: grocery },
    { name: 'Automobile Accessories', img: grocery },
    { name: 'Baby Products', img: grocery },
    { name: 'Health & Wellness', img: grocery },
    { name: 'Footwear', img: grocery },
    { name: 'Music Instruments', img: grocery },
    { name: 'Beauty Products', img: grocery },
    { name: 'Sports Gear', img: grocery },
    { name: 'Sunglasses', img: grocery },
    { name: 'Handbags', img: grocery },
    { name: 'Home Essentials', img: grocery },
    { name: 'Smart Home Devices', img: grocery },
    { name: 'Luggage & Travel', img: grocery },
    { name: 'Craft Supplies', img: grocery },
    { name: 'Luggage & Travel', img: grocery },
    { name: 'Craft Supplies', img: grocery }
];

const Categories = () => {
    const navigate = useNavigate();
    const breadcrumbItems = [
    { label: 'Home', link: '/', icon: Home },
    { label: 'All Categories', link: '/categories' },
];
    return (
        <>
            <CustomBreadcrumbs breadcrumbItems={breadcrumbItems} />
            <section className='all-categories'>
                <Container maxWidth="xl">
                    <CustomPagination />
                    <Grid container spacing={2} rowSpacing={7.625}>
                        {categories.map((category, index) => (
                            <Grid key={index} item size={{ xs: 12, sm: 6, md: 3, lg: 2 }}>
                                <CategoryCard category={category} onClick={() => navigate(`/categories/${category.name}`)} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default Categories;