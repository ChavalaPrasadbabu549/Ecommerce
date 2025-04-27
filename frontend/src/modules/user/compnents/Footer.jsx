import React from "react";
import {
    Grid,
    Typography,
    Divider,
    IconButton,
    Box,
    Container
} from "@mui/material";
import {
    Phone as PhoneIcon,
    Email as EmailIcon,
    LocationOn as LocationIcon,
    Facebook as FacebookIcon,
    Twitter as TwitterIcon,
    Instagram as InstagramIcon,
    LinkedIn as LinkedInIcon
} from "@mui/icons-material";

const Footer = () => {
    return (
        <Box sx={{
            margin: "30px 0px 0px 0px ",
            color: 'text.secondary',
            py: 6,
            background: "#f5eeee"
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Logo and Contact Info */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                            UNITED DEAL
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <PhoneIcon color="primary" sx={{ mr: 1 }} />
                            <Typography>(629) 555-0129</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <LocationIcon color="primary" sx={{ mr: 1 }} />
                            <Typography>457 Washington Ave, Manchester, Kentucky 38495</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <EmailIcon color="primary" sx={{ mr: 1 }} />
                            <Typography>info@lstba.com</Typography>
                        </Box>

                        <Box>
                            <IconButton><FacebookIcon /></IconButton>
                            <IconButton><TwitterIcon /></IconButton>
                            <IconButton><InstagramIcon /></IconButton>
                            <IconButton><LinkedInIcon /></IconButton>
                        </Box>
                    </Grid>

                    {/* Top Category */}
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            TOP CATEGORY
                        </Typography>
                        {['Computer & Laptop', 'SmartPhone', 'Headphone', 'Accessories',
                            'Camera & Photo', 'TV & Homes', 'Browse All Product'].map((item) => (
                                <Typography key={item} sx={{ mb: 1, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                                    {item}
                                </Typography>
                            ))}
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            QUICK LINKS
                        </Typography>
                        {['Shop Product', 'Shopping Cart', 'Wishlist', 'Return Policy',
                            'Shipping Policy', 'Privacy Policy', 'Terms of Service'].map((item) => (
                                <Typography key={item} sx={{ mb: 1, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                                    {item}
                                </Typography>
                            ))}
                    </Grid>

                    {/* Download App */}
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            DOWNLOAD APP
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <img
                                src="/images/google-play-badge.png"
                                alt="Google Play"
                                style={{ height: 40, cursor: 'pointer' }}
                            />
                            <img
                                src="/images/app-store-badge.png"
                                alt="App Store"
                                style={{ height: 40, cursor: 'pointer' }}
                            />
                        </Box>
                    </Grid>

                    {/* Popular Tags */}
                    <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 3 }} >
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            POPULAR TAG
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {['Game', 'iPhone', 'TV', 'Apple Laptop', 'Headphones', 'SSD',
                                'Graphics Card', 'Power Bank', 'Smart TV', 'Speaker',
                                'Tablet', 'Microwave', 'Samsung'].map((tag) => (
                                    <Typography
                                        key={tag}
                                        sx={{
                                            px: 2,
                                            py: 1,
                                            bgcolor: 'action.hover',
                                            borderRadius: 1,
                                            fontSize: 12,
                                            cursor: 'pointer',
                                            '&:hover': {
                                                bgcolor: 'primary.main',
                                                color: 'primary.contrastText'
                                            }
                                        }}
                                    >
                                        {tag}
                                    </Typography>
                                ))}
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                <Typography variant="body2" align="center">
                    © {new Date().getFullYear()} UNITED DEAL. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;