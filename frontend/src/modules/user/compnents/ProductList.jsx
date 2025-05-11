import React from 'react';
import { useParams } from 'react-router-dom';
import zara from '../../../assets/zara.jpg';
const thumbimg1 = "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const thumbimg2 = "https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const thumbimg3 = "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg";
const thumbimg4 = "https://media.istockphoto.com/id/2165616608/photo/kannada-music-maestro.jpg?s=1024x1024&w=is&k=20&c=aFN2U-YACdBPqjJ9VoHSINWyBxnPhVeoP_kHXWPXUeo=";
const thumbimg5 = "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const thumbimg6 = "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg";
const thumbimg7 = "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
import zara_women from '../../../assets/zara-women.jpg';
import { Home } from '@mui/icons-material';
import { Container, Grid } from '@mui/material';
import CustomBreadcrumbs from '../compnents/CustomBreadcrumbs';
import ProductCard from '../compnents/ProductCard';
import CustomPagination from '../compnents/CustomPagination';
import CustomTypography from '../compnents/CustomTypography';
import CustomFilters from '../compnents/CustomFilters';

const dummyProducts = [
    {
        name: 'ZARA Suit Blazer Midnight Black Cotton',
        rating: 4,
        ratingCount: 120,
        price: '₹125',
        img: zara,
        thumbnails: [
            thumbimg1,
            thumbimg2,
            thumbimg3,
            thumbimg4,
            thumbimg5,
            thumbimg7,
        ]
    },
    {
        name: 'ZARA Black SunGlasses Anti Dust Resistant',
        rating: 5,
        ratingCount: 98,
        price: '₹125',
        img: zara_women,
        thumbnails: [
            thumbimg1,
            thumbimg2,
            thumbimg3,
            thumbimg4,
            thumbimg5,
            thumbimg6,
            thumbimg7,
        ]
    },
    {
        name: 'ZARA White Sneakers Lightweight Comfort Fit',
        rating: 4.5,
        ratingCount: 76,
        price: '₹199',
        img: zara,
        thumbnails: [
            thumbimg1,
            thumbimg2,
            thumbimg3,
            thumbimg4,
            thumbimg5,
            thumbimg6,
            thumbimg7,
        ]
    },
    {
        name: 'ZARA Women’s Floral Print Summer Dress',
        rating: 4.8,
        ratingCount: 150,
        price: '₹149',
        img: zara_women,
        thumbnails: [
            thumbimg1,
            thumbimg2,
            thumbimg3,
            thumbimg4,
            thumbimg5,
            thumbimg6,
            thumbimg7,
        ]
    },
    {
        name: 'ZARA Men’s Slim Fit Denim Jeans',
        rating: 4.6,
        ratingCount: 89,
        price: '₹179',
        img: zara,
        thumbnails: [
            thumbimg1,
            thumbimg2,
            thumbimg3,
            thumbimg4,
            thumbimg5,
            thumbimg6,
            thumbimg7,
        ]
    },
    {
        name: 'ZARA Leather Crossbody Bag Compact Style',
        rating: 4.4,
        ratingCount: 45,
        price: '₹159',
        img: zara_women,
        thumbnails: [
            thumbimg1,
            thumbimg2,
            thumbimg3,
            thumbimg4,
            thumbimg5,
            thumbimg6,
            thumbimg7,
        ]
    },
    {
        name: 'ZARA Cotton Crewneck T-Shirt (Pack of 2)',
        rating: 4.3,
        ratingCount: 134,
        price: '₹99',
        img: zara,
        thumbnails: [
            thumbimg1,
            thumbimg2,
            thumbimg3,
            thumbimg4,
            thumbimg5,
            thumbimg6,
            thumbimg7,
        ]
    },
    {
        name: 'ZARA Wool Blend Winter Scarf',
        rating: 4.7,
        ratingCount: 67,
        price: '₹89',
        img: zara_women,
        thumbnails: [
            thumbimg1,
            thumbimg2,
            thumbimg3,
            thumbimg4,
            thumbimg5,
            thumbimg6,
            thumbimg7,
        ]
    }
];



const ProductList = () => {
    const { categoryName } = useParams();
    const breadcrumbItems = [
        { label: 'Home', link: '/', icon: Home },
        { label: 'Categories', link: '/categories' },
        { label: categoryName },
    ];

    return (
        <>
            <CustomBreadcrumbs breadcrumbItems={breadcrumbItems} />
            <section className='all-categories'>
                <Container maxWidth="xl">
                    <CustomPagination />
                    <Grid container spacing={2} >
                        <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 3 }}>
                            <CustomFilters dummyProducts={dummyProducts} />
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
