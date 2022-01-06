import React, { useState } from "react";

//MATERIAL UI
import { Box, IconButton, Typography } from "@mui/material";
//MATERIAL UI ICONS
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


function HappyHour() {
    const [showHappyHour, setShowHappyHour] = useState(false);

    function handleChangeHappyHour() {
        setShowHappyHour(!showHappyHour);
    }

    return(
        <>
            {showHappyHour ? 
                <Box width={'25vw'}>
                    <Box className="flex-row alignment" justifyContent={'center'}>
                        <Typography fontSize={20}>
                            <b><u>HAPPY HOUR</u></b>
                        </Typography>
                        <IconButton onClick={handleChangeHappyHour}>
                            <ExpandLessIcon className="button" />
                        </IconButton>
                    </Box>
                    <Typography textAlign={'center'}>
                        <span style={{fontSize: '14px'}}>MON - FRI <b>|</b> 4pm - 7pm</span><br/>
                        <b>$2 OFF ALL DRAFTS</b><br/>
                        <b>$8 REFAJO PITCHERS</b><br/>
                        <b>$7 MOJITO & SANGRIAS</b><br/>
                        <b>$3 AGUARDIENTE SHOTS</b>
                    </Typography>
                </Box> :
                <Box className="flex-row alignment" justifyContent={'center'} width={'25vw'}>
                    <Typography fontSize={20}>
                        <b>HAPPY HOUR</b>
                    </Typography>
                    <IconButton onClick={handleChangeHappyHour}>
                        <KeyboardArrowDownIcon className="button" />
                    </IconButton>
                </Box>
            }
        </>
    )
}

export default HappyHour;