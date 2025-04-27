import { Breadcrumbs, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ChevronRight } from '@mui/icons-material';
import "../../../styles/breadcrumbs.css"

const CustomBreadcrumbs = ({ breadcrumbItems }) => {
    return (
        <section className='breadcrumbs-section'>
            <Container maxWidth="xl">
                <Breadcrumbs separator={<ChevronRight fontSize="small" />} aria-label="breadcrumb">
                    {breadcrumbItems.map((item, index) => (
                        item.link ? (
                            <Link key={index} to={item.link}>
                                {item.icon && <item.icon fontSize="small" />}
                                {item.label}
                            </Link>
                        ) : (
                            <Typography key={index} >
                                {item.label}
                            </Typography>
                        )
                    ))}
                </Breadcrumbs>
            </Container>
        </section>
    );
};

export default CustomBreadcrumbs;
