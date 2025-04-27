import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { List, ListItem } from '@mui/material';
import Grid from "@mui/material/Grid"; 
import { useLocation } from "react-router-dom";
import react_icon from '../../../assets/react.svg';



const Sidebar = () => {
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    const role = localStorage.getItem('role');

    return (
        <>
            <Grid container>
                <Grid item size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
                    <div className='sidebar-content'>
                        <List>
                            <Link to="/vendor/dashboard">
                                <ListItem className={splitLocation[1] === "vendor" && splitLocation[2] === "dashboard" ? "active" : ""}>
                                    <img src={react_icon} alt='react_icon ' />
                                    <span>Dashboard</span>
                                </ListItem>
                            </Link>
                        </List>
                    </div>
                </Grid>
                <Grid item size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
                    <Outlet />
                </Grid>
            </Grid>
        </>
    )
}

export default Sidebar;