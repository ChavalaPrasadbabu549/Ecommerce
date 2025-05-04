import React from 'react';
import '../../../styles/product.css';
import { useParams, useLocation } from 'react-router-dom';
import zara from '../../../assets/zara.jpg';
import zara_women from '../../../assets/zara-women.jpg';
import { Home } from '@mui/icons-material';
import CustomBreadcrumbs from '../compnents/CustomBreadcrumbs';
import { Container, Grid } from '@mui/material';


const dummyProducts = [
    {
        name: 'ZARA Suit Blazer Midnight Black Cotton',
        rating: 4,
        ratingCount: 120,
        price: '₹125',
        img: zara,
        thumbnails: [
            "https://via.placeholder.com/60x60?text=Blazer+1",
            "https://via.placeholder.com/60x60?text=Blazer+2",
            "https://via.placeholder.com/60x60?text=Blazer+3"
        ]
    },
    {
        name: 'ZARA Black SunGlasses Anti Dust Resistant',
        rating: 5,
        ratingCount: 98,
        price: '₹125',
        img: zara_women,
        thumbnails: [
            "https://via.placeholder.com/60x60?text=Sunglass+1",
            "https://via.placeholder.com/60x60?text=Sunglass+2"
        ]
    },
    {
        name: 'ZARA White Sneakers Lightweight Comfort Fit',
        rating: 4.5,
        ratingCount: 76,
        price: '₹199',
        img: zara,
        thumbnails: [
            "https://via.placeholder.com/60x60?text=Sneaker+1",
            "https://via.placeholder.com/60x60?text=Sneaker+2",
            "https://via.placeholder.com/60x60?text=Sneaker+3"
        ]
    },
    {
        name: 'ZARA Women’s Floral Print Summer Dress',
        rating: 4.8,
        ratingCount: 150,
        price: '₹149',
        img: zara_women,
        thumbnails: [
            "https://via.placeholder.com/60x60?text=Dress+1",
            "https://via.placeholder.com/60x60?text=Dress+2"
        ]
    },
    {
        name: 'ZARA Men’s Slim Fit Denim Jeans',
        rating: 4.6,
        ratingCount: 89,
        price: '₹179',
        img: zara,
        thumbnails: [
            "https://via.placeholder.com/60x60?text=Jeans+1",
            "https://via.placeholder.com/60x60?text=Jeans+2"
        ]
    },
    {
        name: 'ZARA Leather Crossbody Bag Compact Style',
        rating: 4.4,
        ratingCount: 45,
        price: '₹159',
        img: zara_women,
        thumbnails: [
            "https://via.placeholder.com/60x60?text=Bag+1",
            "https://via.placeholder.com/60x60?text=Bag+2"
        ]
    },
    {
        name: 'ZARA Cotton Crewneck T-Shirt (Pack of 2)',
        rating: 4.3,
        ratingCount: 134,
        price: '₹99',
        img: zara,
        thumbnails: [
            "https://via.placeholder.com/60x60?text=Shirt+1",
            "https://via.placeholder.com/60x60?text=Shirt+2"
        ]
    },
    {
        name: 'ZARA Wool Blend Winter Scarf',
        rating: 4.7,
        ratingCount: 67,
        price: '₹89',
        img: zara_women,
        thumbnails: [
            "https://via.placeholder.com/60x60?text=Scarf+1",
            "https://via.placeholder.com/60x60?text=Scarf+2"
        ]
    }
];

function Product() {
    const { categoryName, productName } = useParams();
    const { state } = useLocation();
    const product = state?.product;

    const breadcrumbItems = [
        { label: 'Home', link: '/', icon: Home },
        { label: 'Categories', link: '/categories' },
        { label: categoryName, link: `/categories/${categoryName}` },
        { label: product?.name || productName }
    ];
    

    return (
        <>
            <CustomBreadcrumbs breadcrumbItems={breadcrumbItems} />
            <section className="product-page">
                <Container maxWidth="xl">
                    {product ? (
                        <Grid container spacing={2}>
                            <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="product-main-image"
                                />
                                <div className="product-thumbnails">
                                    {dummyProducts?.thumbnails?.map((thumb, index) => (
                                        <img key={index} src={thumb} alt={`thumb-${index}`} />
                                    ))}
                                </div>
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                                <h1 className="product-title">{product.name}</h1>
                                <div className="product-pricing">
                                    <span className="product-price">₹{product.price}</span>
                                    {product.originalPrice && (
                                        <>
                                            <span className="original-price">₹{product.originalPrice}</span>
                                            <span className="discount-label">21% OFF</span>
                                        </>
                                    )}
                                </div>
                                <p className="product-rating">
                                    ⭐ {product.rating} stars ({product.ratingCount} reviews)
                                </p>

                                <div className="product-options">
                                    <label>Color:</label>
                                    <div className="color-options">
                                        {/* Add logic to loop through color options */}
                                        <span className="color-circle blue"></span>
                                        <span className="color-circle gray"></span>
                                    </div>

                                    <label>Memory:</label>
                                    <select>
                                        <option>16GB unified memory</option>
                                    </select>

                                    <label>Size:</label>
                                    <select>
                                        <option>14-inch Liquid Retina XDR display</option>
                                    </select>

                                    <label>Storage:</label>
                                    <select>
                                        <option>1TB SSD Storage</option>
                                    </select>
                                </div>

                                <div className="product-actions">
                                    <button className="deal-button">GET DEAL (₹90K)</button>
                                    <button className="add-button">ADD</button>
                                </div>
                            </Grid>
                        </Grid>
                    ) : (
                        <p>Product details not found.</p>
                    )}
                </Container>
            </section>
        </>
    );
}

export default Product;
