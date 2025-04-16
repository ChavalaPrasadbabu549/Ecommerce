import React from 'react';
import { Box, Typography, Paper, Button, Breadcrumbs, Link } from '@mui/material';
import { Home, ChevronRight } from '@mui/icons-material';
import Grid from "@mui/material/Grid2";
import '../../../styles/categories.css'

const categories = [
    'Mobile',
    'Cosmetics',
    'Electronics',
    'Furniture',
    'Watches',
    'Decor'
];

const Categories = () => {
    return (
        <Box className="categories-container">
            {/* Breadcrumbs */}
            <Breadcrumbs
                separator={<ChevronRight fontSize="small" />}
                aria-label="breadcrumb"
                className="breadcrumbs"
            >
                <Link href="/" className="breadcrumb-link">
                    <Home fontSize="small" className="breadcrumb-icon" />
                    Home
                </Link>
                <Typography color="text.primary" className="breadcrumb-current">
                    All Categories
                </Typography>
            </Breadcrumbs>

            {/* Header */}
            <Typography variant="h4" className="categories-header">
                All Categories
            </Typography>
            <Typography variant="body1" className="categories-count">
                Showing 1 - 40 of 145 items
            </Typography>

            {/* Categories Grid */}
            <Grid container spacing={2} className="categories-grid">
                {[1, 2].map((section) => (
                    <React.Fragment key={section}>
                        {categories.map((category, index) => (
                            <Grid item size={{ xs: 12, sm: 12, md: 12, lg: 2 }} key={`${section}-${index}`}>
                                <Paper elevation={1} className="category-card">
                                    <Typography variant="h6" className="category-name">
                                        {category}
                                    </Typography>
                                    <Button variant="outlined" size="small" className="view-button">
                                        View Products
                                    </Button>
                                </Paper>
                            </Grid>
                        ))}
                    </React.Fragment>
                ))}
            </Grid>
        </Box>
    );
};

export default Categories;