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
                <Box>
                    <Box className="flex-row alignment" style={{justifyContent: 'flex-end'}}>
                        <Typography className="blur">
                            <b><u>LUNCH SPECIAL <span style={{color: 'red'}}>$9.99</span></u></b>
                        </Typography>
                        <IconButton className="blur" onClick={handleChangeSpecials}>
                            <ExpandLessIcon className="button"/>
                        </IconButton>
                    </Box>
                    <Box className="alignment">
                        <Typography className="blur">
                            {lunch.entree} aconpañado con
                        </Typography>
                        <Typography className="blur">
                            {lunch.soup} y
                        </Typography>
                        <Typography className="blur">
                            {lunch.salad}
                        </Typography>
                    </Box>
                </Box> :
                <Box className="flex-row alignment">
                    <Typography className="blur">
                        <b>LUNCH SPECIAL <span style={{color: 'red'}}>$9.99</span></b>
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