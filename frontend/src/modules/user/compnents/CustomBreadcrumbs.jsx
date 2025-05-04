import React from 'react';
import "../../../styles/breadcrumbs.css";
import { Link } from 'react-router-dom';
import { ChevronRight } from '@mui/icons-material';
import { Breadcrumbs, Container, Typography } from '@mui/material';



const CustomBreadcrumbs = ({ breadcrumbItems }) => {
    return (
        <section className='breadcrumbs-section'>
            <Container maxWidth="xl">
                <Breadcrumbs separator={<ChevronRight fontSize="small" />} aria-label="breadcrumb">
                    {breadcrumbItems.map((item, index) => {
                        const isLast = index === breadcrumbItems.length - 1;

                        return isLast ? (
                            <Link key={index} className="breadcrumb-active">
                                {item.icon && <item.icon fontSize="small" style={{ marginRight: 4 }} />}
                                {item.label}
                            </Link>
                        ) : (
                            <Link key={index} to={item.link}>
                                {item.icon && <item.icon fontSize="small" style={{ marginRight: 4 }} />}
                                {item.label}
                            </Link>
                        );
                    })}
                </Breadcrumbs>
            </Container>
        </section>
    );
};

export default CustomBreadcrumbs;
