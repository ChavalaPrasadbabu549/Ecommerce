import React from 'react';
import '../../../styles/customcheckbox.css'
import { Checkbox, Radio, FormControlLabel } from '@mui/material';

const CustomCheckbox = ({ type, label, ...props }) => {
    const ControlComponent = type === 'radio' ? Radio : Checkbox;
    return (
        <div className="customcheckbox">
            <FormControlLabel
                control={<ControlComponent {...props} />}
                label={label}
            />
        </div>
    );
};

export default CustomCheckbox;
