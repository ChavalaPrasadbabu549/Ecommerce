import React from 'react';
import { Box } from '@mui/material';
import '../../../styles/custombox.css'

const CustomBox = ({ className, children, sx, ...rest }) => {
  return (
    <div className='custom-box'>
      <Box
        className={className}
        sx={sx}
        {...rest}
      >
        {children}
      </Box>
    </div>
  );
};

export default CustomBox;
