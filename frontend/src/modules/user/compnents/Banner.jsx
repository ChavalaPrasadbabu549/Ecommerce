import React, { useRef } from 'react';
import Slider from 'react-slick';
import '../../../styles/banner.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Typography, Button } from '@mui/material';
import banner from '../../../assets/banner.svg';
import Grid from "@mui/material/Grid";
import CommonGrid from './CommonGrid';

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
        arrows: false,
    };

    const slides = [
        {
            title: 'LATEST NIKE SHOES',
            subtitle: 'Best Deal Online on smart watches',
            offer: 'UP to 80% OFF',
            image: banner,
        },
        {
            title: 'ADIDAS SUPER SALE',
            subtitle: 'Limited Time Offer',
            offer: 'UP to 70% OFF',
            image: banner,
        },
        {
            title: 'PUMA EXCLUSIVE DEALS',
            subtitle: 'Grab your style now',
            offer: 'Flat 60% OFF',
            image: banner,
        },
    ];

    return (
        <section className="banner-section">
            <Container maxWidth="xl">
                <div className="slider-container">
                    <Slider ref={sliderRef} {...settings}>
                        {slides.map((slide, index) => (
                            <div key={index} className="banner-slide">
                                <Grid container spacing={3} alignItems="center">
                                    <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                                        <div className="banner-text">
                                            <Typography variant="h6">{slide.subtitle}</Typography>
                                            <Typography variant="h1">{slide.title}</Typography>
                                            <Typography >{slide.offer}</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
                                        <div className="banner-image">
                                            <img src={slide.image} alt={slide.title} className="shoe-image" />
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        ))}
                    </Slider>

                    <div className="custom-arrow custom-prev" onClick={() => sliderRef.current.slickPrev()}>
                        &#8592;
                    </div>
                    <div className="custom-arrow custom-next" onClick={() => sliderRef.current.slickNext()}>
                        &#8594;
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Banner;
