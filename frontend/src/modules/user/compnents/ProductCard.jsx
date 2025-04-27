import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductCard = ({ product }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={product.img || 'https://via.placeholder.com/150'} // placeholder if no image
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ⭐ {product.rating} | {product.price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
