import React, { useState } from 'react';
import '../../../styles/product.css';
import { useNavigate, useParams } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardContent, CardMedia, Rating, IconButton } from '@mui/material';
import CustomTypography from './CustomTypography';
import CustomSnackbar from './CustomSnackbar';

const ProductCard = ({ product }) => {
    const { categoryName } = useParams();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${categoryName}/${encodeURIComponent(product.name)}`, { state: { product } });
    };
    const [liked, setLiked] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleWishlistClick = () => {
        setLiked(!liked);
        setOpenSnackbar(true);
    };

    return (
        <>
            <div className='product-card' onClick={handleClick}>
                <IconButton onClick={handleWishlistClick} >
                    {liked ? (
                        <FavoriteIcon sx={{ color: 'red' }} />
                    ) : (
                        <FavoriteBorderIcon sx={{ color: "#999" }} />
                    )}
                </IconButton>
                <div className='product-image'>
                    <CardMedia
                        component="img"
                        image={product.img}
                        alt={product.name}
                    />
                </div>
                <CardContent>
                    <CustomTypography variant="h5" label={product.name} className="product-name-h5" />
                    <CustomTypography variant="h4" className="product-price-h4">
                        Price: <span>{product.price}</span>
                    </CustomTypography>
                    <div className='product-rating'>
                        <Rating value={product.rating} precision={0.5} readOnly />
                        <CustomTypography variant="h6" className="product-review-h6">{product.rating}  Star Rating</CustomTypography>
                    </div>
                    <CustomTypography variant="body2" label={`(${product.ratingCount}  User feedback)`} className="product-review-body2" />
                </CardContent>
            </div>
            <CustomSnackbar
                open={openSnackbar}
                onClose={() => setOpenSnackbar(false)}
                message={liked ? 'Added to wishlist!' : 'Removed from wishlist'}
                autoHideDuration={5000}
                severity={liked ? 'success' : 'info'}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                className="product-snackbar"
            />
        </>
    );
};

export default ProductCard;
