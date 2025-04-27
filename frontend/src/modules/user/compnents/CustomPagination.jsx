import React, { useState } from 'react';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ViewListIcon from '@mui/icons-material/ViewList';
import CustomBox from '../compnents/CustomBox';
import CustomButton from '../compnents/CustomButton';
import CustomSelect from '../compnents/CustomSelect';
import CustomTextField from '../compnents/CustomTextField';
import CustomTypography from '../compnents/CustomTypography';

const filter = [
    { label: 'Name', value: 'Name' },
    { label: 'Price', value: 'Price' },
];
const CustomPagination = () => {
    const [cat, setCat] = useState('')
    const [fil, setFil] = useState()
    return (
        <>
            <CustomBox className="categories-header">
                <CustomBox className="categories-main">
                    <CustomBox className="categories-content">
                        <CustomButton startIcon={<KeyboardBackspaceIcon />} onClick={() => navigate(-1)} className="back-btn" />
                        <CustomTypography variant="h4" className="categories-text-h4" label="All Categories" />
                    </CustomBox>
                    <CustomBox className="categories-content">
                        <ViewModuleIcon fontSize="small" />
                        <ViewListIcon fontSize="small" />
                        <CustomTypography variant="body1" className="categories-content-text-p" label="Showing 1 - 40 of 145 items" />
                    </CustomBox>
                </CustomBox>
                <CustomBox className="categories-content">
                    <CustomTypography variant="body1" label="To Show:" className="categories-content-text-p" />
                    <CustomTextField
                        type="text"
                        placeholder="Num"
                        value={cat}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            if (/^\d{0,6}$/.test(newValue)) {
                                setCat(newValue);
                                handleChange(e);
                            }
                        }}
                        size="small"
                        sx={{ width: 70, }}
                    />

                    <CustomSelect
                        option={fil}
                        setoption={setFil}
                        options={filter}
                        placeholder="None"
                        size="small"
                        sx={{ width: 150, }}
                        IconComponent={KeyboardArrowDownIcon}
                    />
                </CustomBox>
            </CustomBox>
        </>
    )
}

export default CustomPagination
