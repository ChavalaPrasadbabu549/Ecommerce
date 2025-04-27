import React from "react";
import '../../../styles/custombutton.css';
import { Button } from "@mui/material";

const CustomButton = ({ label = "", onClick, type = "", className = "", ...props }) => {
    return (
        <div className="custom-button">
            <Button
                type={type}
                onClick={onClick}
                className={className}
                {...props}
            >
                {label}
            </Button>
        </div >
    );
};

export default CustomButton;
