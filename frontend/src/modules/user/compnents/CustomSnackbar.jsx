import React from 'react';
import '../../../styles/customsnackbar.css'
import { Snackbar, Alert } from '@mui/material';

const CustomSnackbar = ({ open, onClose, message, severity, duration, anchorOrigin, className }) => {
    return (
        <div className='customsnackbar'>
            <Snackbar
                open={open}
                autoHideDuration={duration}
                onClose={onClose}
                anchorOrigin={anchorOrigin}
                className={className}
            >
                <Alert onClose={onClose} severity={severity} >
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default CustomSnackbar;
