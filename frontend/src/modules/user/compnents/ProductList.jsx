import React from 'react';
import { useParams } from 'react-router-dom';
import grocery from '../../../assets/grocery.svg';
import { Home } from '@mui/icons-material';
import { Container, Grid } from '@mui/material';
import CustomBreadcrumbs from '../compnents/CustomBreadcrumbs';
import ProductCard from './ProductCard';
import CustomPagination from './CustomPagination';
import CustomTypography from './CustomTypography';
import CustomFilters from './CustomFilters';


const dummyProducts = [
    {
        name: 'ZARA Suit Blazer Midnight Black Cotton',
        rating: 4.7,
        price: '₹125',
        img: grocery
    },
    {
        name: 'ZARA Black SunGlasses Anti Dust Resistant',
        rating: 4.7,
        price: '₹125',
        img: grocery
    },
    {
        name: 'ZARA White Sneakers Lightweight Comfort Fit',
        rating: 4.5,
        price: '₹199',
        img: grocery
    },
    {
        name: 'ZARA Women’s Floral Print Summer Dress',
        rating: 4.8,
        price: '₹149',
        img: grocery
    },
    {
        name: 'ZARA Men’s Slim Fit Denim Jeans',
        rating: 4.6,
        price: '₹179',
        img: grocery
    },
    {
        name: 'ZARA Leather Crossbody Bag Compact Style',
        rating: 4.4,
        price: '₹159',
        img: grocery
    },
    {
        name: 'ZARA Cotton Crewneck T-Shirt (Pack of 2)',
        rating: 4.3,
        price: '₹99',
        img: grocery
    },
    {
        name: 'ZARA Wool Blend Winter Scarf',
        rating: 4.7,
        price: '₹89',
        img: grocery
    }
];

const ProductList = () => {
    const { categoryName } = useParams();
    const breadcrumbItems = [
        { label: 'Home', link: '/', icon: Home },
        { label: 'Categories', link: '/categories' },
        { label: categoryName, link: `/categories/${categoryName}` },
    ];

    return (
        <>
            <CustomBreadcrumbs breadcrumbItems={breadcrumbItems} />
            <section className='all-categories'>
                <Container maxWidth="xl">
                    <CustomPagination />
                    <Grid container spacing={2} >
                        <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 3 }}>
                            <CustomFilters />
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 9 }}>
                            {dummyProducts.length > 0 ? (
                                <Grid container spacing={2} rowSpacing={5}>
                                    {dummyProducts.map((product, index) => (
                                        <Grid key={index} item size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
                                            <ProductCard product={product} />
                                        </Grid>
                                    ))}
                                </Grid>
                            ) : (
                                <CustomTypography variant="h6" className="category-text-h6" label={`No products available in ${categoryName}`} />
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default ProductList;
