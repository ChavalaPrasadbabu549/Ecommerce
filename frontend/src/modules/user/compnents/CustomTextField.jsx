import React from 'react'
import { TextField } from '@mui/material';
import '../../../styles/customtextfield.css';

const CustomTextField = ({ sx, size, label, error, helperText, type = "", placeholder = "", ...props }) => {
    return (
        <div className='common-textfiled'>
            <TextField
                type={type}
                label={label}
                placeholder={placeholder}
                fullWidth
                error={error}
                helperText={helperText}
                {...props}
                sx={sx}
                size={size}
            />
        </div>
    )
}

export default CustomTextField;
