import React from "react";
import '../../../styles/customtextfield.css';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText
} from "@mui/material";

const CustomSelect = ({
    label,
    options = [],
    option,
    setoption,
    error,
    helperText,
    placeholder = "Select",
    showLabelAbove = false,
    sx,
    size = "small",
    inputProps,
    IconComponent,
    ...rest
}) => {
    const safeLabel = label || "select";
    const labelId = `select-label-${safeLabel.replace(/\s+/g, '-')}`;

    return (
        <div className="common-textfiled">
            {showLabelAbove && (
                <InputLabel id={`${labelId}-above`}>
                    {label}
                </InputLabel>
            )}
            <FormControl fullWidth size={size} variant="outlined" error={error} {...rest}>
                {!showLabelAbove && label && (
                    <InputLabel id={labelId}>{label}</InputLabel>
                )}
                <Select
                    labelId={labelId}
                    id={`select-${safeLabel}`}
                    value={option}
                    onChange={(e) => setoption(e.target.value)}
                    fullWidth
                    placeholder={placeholder}
                    sx={sx}
                    IconComponent={IconComponent}
                    inputProps={inputProps}
                    label={!showLabelAbove ? label : undefined}
                >
                    <MenuItem value="" disabled>
                        {placeholder}
                    </MenuItem>
                    {options.map((opt, index) => (
                        <MenuItem key={index} value={opt.value}>
                            {opt.label}
                        </MenuItem>
                    ))}
                </Select>
                {error && <FormHelperText>{helperText}</FormHelperText>}
            </FormControl>
        </div>
    );
};

export default CustomSelect;
