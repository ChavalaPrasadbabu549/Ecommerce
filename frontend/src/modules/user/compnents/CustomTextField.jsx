import React from 'react'
import { TextField } from '@mui/material';
import '../../../styles/customtextfield.css';

const CustomTextField = ({ variant, sx, value, onChange, size, label, error, helperText, type = "", placeholder = "", ...props }) => {
    return (
        <div className='common-textfiled'>
            <TextField
                type={type}
                label={label}
                placeholder={placeholder}
                fullWidth
                error={error}
                helperText={helperText}
                sx={sx}
                size={size}
                value={value}
                onChange={onChange}
                variant={variant}
                {...props}
            />
        </div>
    )
}

export default CustomTextField;
