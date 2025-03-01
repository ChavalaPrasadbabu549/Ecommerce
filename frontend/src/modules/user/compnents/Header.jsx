
import React from 'react'
import { List, ListItem } from '@mui/material'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <List>
                <ListItem><Link to="/home" >home</Link></ListItem>
                <ListItem><Link to="/home" >habout</Link></ListItem>
                <ListItem><Link to="/home" >hcontact</Link></ListItem>
            </List>
        </>
    )
}

export default Header