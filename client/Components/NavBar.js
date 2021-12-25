import React, {Component} from "react";
import reactDom from "react-dom";
import { Link } from "react-router-dom";

//MATERIAL UI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab'

import { AppBar, Button, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LiquorIcon from '@mui/icons-material/Liquor';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { Box } from "@mui/system";
import MenuTab from "./menus/MenuTab";


function NavBar() {
    return (
        <>
            <AppBar style={{backgroundColor: 'transparent', height: '20vh', justifyContent: 'space-evenly', textAlign: 'center', paddingBottom: '20px'}} elevation={0}>
                <Box>
                    <Typography color={'black'} sx={{fontSize: '75px', marginBottom: '-20px'}}>
                        <b>MARIMONDA</b>
                    </Typography>
                </Box>
                <Box>
                    <Link to={'/'}>
                        <Button color="success" startIcon={<HomeIcon/>} size="large">
                            <b>HOME</b>
                        </Button>
                    </Link>
                    
                    <MenuTab/>

                    <Link to={'/events'}>
                        <Button color="success" startIcon={<EventNoteIcon/>} size="large">
                            <b>EVENTS</b>
                        </Button>
                    </Link>

                    <Link to={'/contact'}>
                        <Button color="success" startIcon={<ConnectWithoutContactIcon/>} size="large">
                            <b>CONTACT US</b>
                        </Button>
                    </Link>
                </Box>
            </AppBar>
        </>
    )
}

export default NavBar;