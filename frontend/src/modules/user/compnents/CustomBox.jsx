import React from 'react';
import { Box } from '@mui/material';
import '../../../styles/custombox.css'

const CustomBox = ({ className, children, ...rest }) => {
  return (
    <div className='custom-box'>
      <Box
        className={className}
        {...rest}
      >
        {children}
      </Box>
    </div>
  );
};

export default CustomBox;
