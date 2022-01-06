import React, { useState } from "react";

//MATERIAL UI
import { Box, IconButton, Paper } from "@mui/material";
//MATERIAL UI ICONS
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import data from '../photos/homePhotos.json';


function Photos() {
    const photoArray = data.map((item) => item.img);
    const photoDescription = data.map((item) => item.description);
    const [currPhoto, setCurrPhoto] = useState(0);

    let lastPhotoIdx = photoArray.length - 1;
    let currentPhoto = photoArray[currPhoto];

    function handlePrevPhoto() {
        if (currPhoto === 0) setCurrPhoto(lastPhotoIdx);
        else setCurrPhoto(currPhoto - 1);
    }

    function handleNextPhoto() {
        if (currPhoto === lastPhotoIdx) setCurrPhoto(0);
        else setCurrPhoto(currPhoto + 1);
    }

    return(
        <Box className="flex-row alignment photo-container">
            <Box className="inner-photo-container" width={'25vw'}>
                <IconButton onClick={handlePrevPhoto}>
                    <ArrowBackIosNewIcon className="button"/>
                </IconButton>
                <img src={currentPhoto}/>
                <IconButton onClick={handleNextPhoto}>
                    <ArrowForwardIosIcon className="button" />
                </IconButton>
            </Box>
            <Box width={'25vw'}>
                <Paper className="photo-description">
                    {photoDescription[currPhoto]}
                </Paper>
            </Box>
        </Box>
    )
}

export default Photos;