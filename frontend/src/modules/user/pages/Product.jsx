import { useState, useCallback, useEffect } from 'react';
import '../../../styles/product.css';
import { useParams, useLocation } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import CustomBreadcrumbs from '../compnents/CustomBreadcrumbs';
import { Container, Grid } from '@mui/material';
import ReactImageMagnify from 'react-image-magnify';
import useEmblaCarousel from 'embla-carousel-react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';




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
    const [selectedImage, setSelectedImage] = useState(product.img);
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    // Scroll functions
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setCanScrollPrev(emblaApi.canScrollPrev());
            setCanScrollNext(emblaApi.canScrollNext());
        };

        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi]);




    return (
        <>
            <CustomBreadcrumbs breadcrumbItems={breadcrumbItems} />
            <section className="product-page">
                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                            <div className="image-gallery">
                                <div className="main-image-wrapper">
                                    <ReactImageMagnify
                                        smallImage={{
                                            alt: 'Product Image',
                                            src: selectedImage,
                                            width: 550,
                                            height: 420,
                                        }}
                                        largeImage={{
                                            src: selectedImage,
                                            width: 1400,
                                            height: 1400
                                        }}
                                        imageStyle={{
                                            borderRadius: '4px',
                                            border: '1px solid #eee'
                                        }}
                                        enlargedImageContainerStyle={{
                                            zIndex: 1000,
                                            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                                            backgroundColor: 'white'
                                        }}
                                        enlargedImagePosition="beside"
                                        hoverDelayInMs={200}
                                    />
                                </div>
                                <div className="embla">
                                    <div className="embla__viewport" ref={emblaRef}>
                                        <div className="embla__container">
                                            {product?.thumbnails?.map((thumb, index) => (
                                                <div className="embla__slide" key={index}>
                                                    <div className="embla__slide__inner">
                                                        <img
                                                            src={thumb}
                                                            alt={`thumb-${index}`}
                                                            className={`embla__slide__img ${selectedImage === thumb ? 'active' : ''}`}
                                                            onClick={() => setSelectedImage(thumb)}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="embla__prev" onClick={scrollPrev} disabled={!canScrollPrev}>
                                        <ArrowBackIosIcon fontSize="small" />
                                    </button>
                                    <button className="embla__next" onClick={scrollNext} disabled={!canScrollNext}>
                                        <ArrowForwardIosIcon fontSize="small" />
                                    </button>
                                </div>


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

                </Container>
            </section>
        </>
    );
}

export default Product;
