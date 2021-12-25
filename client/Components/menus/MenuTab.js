import { Box, Container, Typography, Menu, MenuItem, Button, Popper, Grow, ClickAwayListener, MenuList, ButtonGroup, Paper, Link } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import React from "react";

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
                color="success" 
                startIcon={<MenuBookIcon/>} 
                size="large"
            >
            MENU
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
                        <Paper style={{backgroundColor: '#000000', opacity: 0.7}}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <Link href="#/food" style={{textDecoration: 'none', color: 'yellow'}}>
                                        <MenuItem onClick={handleClose}>FOOD</MenuItem>
                                    </Link>
                                    <Link href="#/beer" style={{textDecoration: 'none', color: 'yellow'}}>
                                        <MenuItem onClick={handleClose}>BEER</MenuItem>
                                    </Link>
                                    <Link href="#/cocktails" style={{textDecoration: 'none', color: 'yellow'}}>
                                        <MenuItem onClick={handleClose}>COCKTAILS</MenuItem>
                                    </Link>
                                    <Link href="#/spirits-wines" style={{textDecoration: 'none', color: 'yellow'}}>
                                        <MenuItem onClick={handleClose}>SPIRITS & WINES</MenuItem>
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