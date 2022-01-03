import React from "react";

//MUI
import { MenuItem, Button, Popper, Grow, ClickAwayListener, MenuList, Paper, Link } from "@mui/material";
//MUI ICONS
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LiquorIcon from '@mui/icons-material/Liquor';
import SportsBarIcon from '@mui/icons-material/SportsBar';

function MenuTab() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) return;
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) anchorRef.current.focus();
        prevOpen.current = open;
    }, [open]);

    return(
        <>
            <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                // color="success" 
                startIcon={<MenuBookIcon/>} 
                size="large"
                style={{color: '#005eff'}}
            >
            <b>MENU</b>
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                >
                {({ TransitionProps }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:'left top',
                        }}
                    >
                        <Paper style={{backgroundColor: 'transparent', backdropFilter: 'blur(5px)'}}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <Link href="#/food" style={{textDecoration: 'none', color: '#db5000'}}>
                                        <MenuItem onClick={handleClose}><RestaurantMenuIcon sx={{fontSize: '18px', marginRight: '10px'}}/>FOOD</MenuItem>
                                    </Link>
                                    <Link href="#/beer" style={{textDecoration: 'none', color: '#db5000'}}>
                                        <MenuItem onClick={handleClose}><SportsBarIcon sx={{fontSize: '18px', marginRight: '10px'}}/>BEER</MenuItem>
                                    </Link>
                                    <Link href="#/cocktails" style={{textDecoration: 'none', color: '#db5000'}}>
                                        <MenuItem onClick={handleClose}><LocalBarIcon sx={{fontSize: '18px', marginRight: '10px'}}/>COCKTAILS</MenuItem>
                                    </Link>
                                    <Link href="#/spirits-wines" style={{textDecoration: 'none', color: '#db5000'}}>
                                        <MenuItem onClick={handleClose}><LiquorIcon sx={{frontSize: '10px', marginRight: '10px'}}/>SPIRITS & WINES</MenuItem>
                                    </Link>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    )
}

export default MenuTab;