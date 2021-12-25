import React, {Component} from "react";
import { Link } from "react-router-dom";

//MATERIAL UI
import { AppBar, Button, Typography, Box } from "@mui/material";
//MUI ICONS
import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

//COMPONENTS
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