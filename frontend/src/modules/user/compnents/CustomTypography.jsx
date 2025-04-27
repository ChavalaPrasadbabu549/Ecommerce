import React from 'react';
import '../../../styles/customtypography.css'
import { Typography } from '@mui/material';


const CustomTypography = ({ label, variant, className, children }) => {
    return (
        <div className='custom-typography'>
            <Typography variant={variant} className={className}>{label} {children}</Typography>
        </div>
    )
}

export default CustomTypography
