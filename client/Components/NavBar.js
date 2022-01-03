import React from "react";
import { Link } from "react-router-dom";

//MATERIAL UI
import { AppBar, Button, Typography, Box } from "@mui/material";
import { withStyles } from '@mui/styles';

//MUI ICONS
import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

//COMPONENTS
import MenuTab from "./menus/MenuTab";

const styles = {
    container: {
        height: '20vh',
        textAlign: 'center',
        justifyContent: 'center'
    },
    titleContainer: {
        marginBottom: '-20px'
    },
};

function NavBar(props) {
    const { classes } = props;

    return (
        <>
            <AppBar className={classes.container} style={{backgroundColor: 'transparent'}} elevation={0}>
                <Box className={classes.titleContainer}>
                    <Typography color={'yellow'} fontSize={75} style={{textShadow: '3px 3px 3px blue, 5px 5px 3px red'}}>
                        <b>MARIMONDA</b>
                    </Typography>
                </Box>
                <Box>
                    <Link to={'/'}>
                        <Button style={{color: '#005eff'}} startIcon={<HomeIcon/>} size="large">
                            <b>HOME</b>
                        </Button>
                    </Link>
                    
                    <MenuTab/>

                    <Link to={'/events'}>
                        <Button style={{color: '#005eff'}} startIcon={<EventNoteIcon/>} size="large">
                            <b>EVENTS</b>
                        </Button>
                    </Link>

                    <Link to={'/contact'}>
                        <Button style={{color: '#005eff'}} startIcon={<ConnectWithoutContactIcon/>} size="large">
                            <b>CONTACT US</b>
                        </Button>
                    </Link>
                </Box>
            </AppBar>
        </>
    )
}

export default withStyles(styles)(NavBar);