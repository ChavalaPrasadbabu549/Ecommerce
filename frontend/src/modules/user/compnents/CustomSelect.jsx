
import React from "react";
import '../../../styles/customtextfield.css';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";


const CustomSelect = ({ label, options, option, setoption, error, helperText, placeholder, showLabelAbove, sx, size, inputProps, IconComponent, ...rest }) => {
    return (
        <div className="common-textfiled">
            {showLabelAbove && (
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            )}
            <FormControl fullWidth size={size} variant="outlined" {...rest}>
                <Select
                    labelId={"demo-simple-select-label"}
                    id="demo-simple-select"
                    value={option}
                    onChange={(e) => setoption(e.target.value)}
                    placeholder={placeholder}
                    fullWidth
                    error={error}
                    sx={sx}
                    IconComponent={IconComponent}
                    inputProps={inputProps}
                    label={label}
                >
                    <MenuItem value="" disabled>{placeholder}</MenuItem>
                    {options.map((opt, index) => (
                        <MenuItem key={index} value={opt.value}>
                            {opt.label}
                        </MenuItem>
                    ))}
                </Select>
                {error && <FormHelperText>{helperText}</FormHelperText>}
            </FormControl>
        </div >
    );
};

export default CustomSelect;
