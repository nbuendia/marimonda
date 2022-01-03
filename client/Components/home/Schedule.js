import React, { useState } from "react";

//MATERIAL UI
import { Box, IconButton, Typography } from "@mui/material";
//MATERIAL UI ICONS
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


function Schedule() {
    const [showSchedule, setShowSchedule] = useState(false);

    function handleChangeSchedule() {
        setShowSchedule(!showSchedule);
    }

    return(
        <>
            {showSchedule ? 
                <Box>
                    <Box className="flex-row alignment" justifyContent={'flex-end'}>
                        <Typography className="blur" fontSize={20}>
                            <b><u>HOURS OF OPERATION</u></b>
                        </Typography>
                        <IconButton className="blur" onClick={handleChangeSchedule}>
                            <ExpandLessIcon className="button" />
                        </IconButton>
                    </Box>
                    <Typography className="blur">
                        <b>MONDAY - THURSDAY</b><br/>
                        <b>11am - 12pm</b><br/>
                        <b>FRIDAY & SATURDAY</b><br/>
                        <b>11am - 2am</b><br/>
                        <b>SUNDAY</b><br/>
                        <b>12pm - 10am</b>
                    </Typography>
                </Box> :
                <Box className="flex-row alignment" justifyContent={'flex-end'}>
                    <Typography className="blur" fontSize={20}>
                        <b>HOURS OF OPERATION</b>
                    </Typography>
                    <IconButton className="blur" onClick={handleChangeSchedule}>
                        <KeyboardArrowDownIcon className="button" />
                    </IconButton>
                </Box>
            }
        </>
    )
}

export default Schedule;