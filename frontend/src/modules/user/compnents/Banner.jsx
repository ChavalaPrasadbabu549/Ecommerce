import React, { useRef } from 'react';
import Slider from 'react-slick';
import '../../../styles/banner.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Grid from "@mui/material/Grid2";
import { Container, List, ListItem, Typography } from '@mui/material'


const Banner = () => {
    const sliderRef = useRef();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    const slides = [
        {
            title: 'LATEST NIKE SHOES',
            subtitle: 'Best Deal Online on smart watches',
            offer: 'UP to 80% OFF',
            image: 'https://static.nike.com/a/images/t_default/8c6e2b5f-4f3d-42ac-b20f-7589fc083a5b/air-jordan-1-retro-high-og-mens-shoes-0F5QKc.png'
        },
        {
            title: 'ADIDAS SUPER SALE',
            subtitle: 'Limited Time Offer',
            offer: 'UP to 70% OFF',
            image: 'https://static.nike.com/a/images/t_default/8c6e2b5f-4f3d-42ac-b20f-7589fc083a5b/air-jordan-1-retro-high-og-mens-shoes-0F5QKc.png'
        },
        {
            title: 'ADIDAS SUPER SALE',
            subtitle: 'Limited Time Offer',
            offer: 'UP to 90% OFF',
            image: 'https://static.nike.com/a/images/t_default/8c6e2b5f-4f3d-42ac-b20f-7589fc083a5b/air-jordan-1-retro-high-og-mens-shoes-0F5QKc.png'
        },
    ];
    return (
        <section className='banner-section'>
            <Container maxWidth="xl">
                <div className="slider-container">
                    <Slider ref={sliderRef} {...settings}>
                        {slides.map((slide, index) => (
                            <div key={index} className="banner-slide">
                                <Grid container spacing={2}>
                                    <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 6 }} >
                                        <div className="text-section">
                                            <Typography>{slide.subtitle}</Typography>
                                            <Typography variant='h1'>{slide.title}</Typography>
                                            <Typography variant='h6'>{slide.offer}</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 6 }} >
                                        <div className="image-section">
                                            <img src={slide.image} alt={slide.title} className="shoe-image" />
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        ))}
                    </Slider>

                    {/* Arrows inside JSX */}
                    <div className="custom-arrow custom-prev" onClick={() => sliderRef.current.slickPrev()}>
                        &#8592;
                    </div>
                    <div className="custom-arrow custom-next" onClick={() => sliderRef.current.slickNext()}>
                        &#8594;
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Banner