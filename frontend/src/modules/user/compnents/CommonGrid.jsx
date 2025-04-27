import React from "react";
import Grid from '@mui/material/Grid';

const CommonGrid = ({
    container = false,
    item = false,
    size = {},
    spacing = 2,
    children,
    className,
    label,
    ...props
}) => {
    console.log('Received props in CommonGrid:', props); // Inspect all props passed down
    console.log('Received size in CommonGrid:', size); // Check if size is received correctly
    return (
        <Grid
            container={container}
            item={item}
            spacing={container ? spacing : undefined}
            {...size}
            className={className}
            {...props}
        >
            {label} {children}
        </Grid>
    );
};


export default CommonGrid;
