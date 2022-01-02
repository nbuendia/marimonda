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
                    <Box className="flex-row alignment">
                        <Typography className="blur">
                            <b><u>HOURS OF OPERATION</u></b>
                        </Typography>
                        <IconButton className="blur" onClick={handleChangeSchedule}>
                            <ExpandLessIcon className="button" />
                        </IconButton>
                    </Box>
                    <Typography className="blur">
                        <b>MONDAY | 11am - 10pm <br/>
                        TUESDAY | 11am - 10pm <br/>
                        WEDNESDAY | 10am - 12am <br/>
                        THURSDAY | 10am - 12am <br/>
                        FRIDAY | 10am - 2am <br/>
                        SATURDAY | 11am - 2am <br/>
                        SUNDAY | 11am - 12am</b>
                    </Typography>
                </Box> :
                <Box className="flex-row alignment">
                    <Typography className="blur">
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