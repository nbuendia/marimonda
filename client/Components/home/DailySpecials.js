import React, { useState } from "react";

//MATERIAL UI
import { Box, IconButton, Typography } from "@mui/material";
//MATERIAL UI ICONS
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import data from '../menus/menuData/dailySpecials.json';


function DailySpecials() {
    const [showSpecials, setShowSpecials] = useState(false);

    function handleChangeSpecials() {
        setShowSpecials(!showSpecials);
    }

    const options = {weekday: "long"}
    const day = Intl.DateTimeFormat("en-US", options).format();
    const lunch = data.filter((meal) => meal.day === day)[0];

    return(
        <>
            {showSpecials ? 
                <Box width={'25vw'}>
                    <Box className="flex-row alignment" justifyContent={'center'}>
                        <Typography className="blur" fontSize={20}>
                            <b><u>LUNCH SPECIAL</u></b><br/>
                        </Typography>
                        <IconButton className="blur" onClick={handleChangeSpecials}>
                            <ExpandLessIcon className="button"/>
                        </IconButton>
                    </Box>
                    <Box className="alignment" >
                        <Typography className="blur" textAlign={'center'}>
                            <span style={{fontSize: '14px'}}>MON - FRI <b>|</b> 11am - 3pm</span><br/>
                            <b>{lunch.entree.toUpperCase()}</b><br/>
                            <b>{lunch.soup.toUpperCase()} Y</b><br/>
                            <b>{lunch.salad.toUpperCase()}</b><br/>
                            <i className="price">$9.99</i><br/>
                        </Typography>
                    </Box>
                </Box> :
                <Box className="flex-row alignment" justifyContent={'center'} width={'25vw'}>
                    <Typography className="blur" fontSize={20}>
                        <b>LUNCH SPECIAL</b>
                    </Typography>
                    <IconButton className="blur" onClick={handleChangeSpecials}>
                        <KeyboardArrowDownIcon className="button"/>
                    </IconButton>
                </Box>
            }
        </>
    )
}

export default DailySpecials;