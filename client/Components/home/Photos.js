import React, { useState } from "react";

//MATERIAL UI
import { Box, IconButton } from "@mui/material";
//MATERIAL UI ICONS
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import data from '../menus/menuData/dailySpecials.json';


function Photos() {
    const [showPhotos, setShowPhotos] = useState(false);

    function handleChangePhotos() {
        setShowPhotos(!showPhotos);
    }

    return(
        <>
            {/* PHOTOS */}
            <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {/* <img src="https://i.imgur.com/hTdVE68m.jpg" className="test"/> */}
                <IconButton>
                    <ArrowBackIosNewIcon />
                </IconButton>
                <img src="https://i.imgur.com/hTdVE68m.jpg"/>
                <IconButton>
                    <ArrowForwardIosIcon />
                </IconButton>
                {/* <img src="https://i.imgur.com/hTdVE68m.jpg"/> */}
            </Box>
        </>
    )
}

export default Photos;