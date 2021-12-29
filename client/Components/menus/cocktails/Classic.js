import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

//MATERIAL UI
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
//MATERIAL UI ICONS
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import data from '../menuData/cocktails.json';

function Classic() {
    const classics = data.filter((cocktail) => cocktail.type === 'classic');

    return(
        <>
            {classics.map((cocktail) => (
                <Grid item key={cocktail.id} xs={6}>
                    <Card className='cocktail-card' style={{backgroundColor: 'rgba(200, 200, 200, 0.7)'}}>
                        <CardMedia 
                            component='img'
                            image={cocktail.img}
                            alt='Cocktail Image'
                            sx={{width: 75, alignItems: 'center'}}
                        />
                        <CardContent className="cocktail-card-content">
                            <Box className="cocktail-name-price">
                                <Typography fontSize={20}><b>{cocktail.name}</b></Typography>
                                <Typography fontSize={18}><b>${cocktail.price}</b></Typography>
                            </Box>
                            <Box className="drink-description" fontSize={15}>
                                <ReactReadMoreReadLess
                                    charLimit={60}
                                    readMoreText={<KeyboardArrowDownIcon />}
                                    readLessText={<ExpandLessIcon />}
                                >
                                    {cocktail.ingredients}
                                </ReactReadMoreReadLess>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </>
    )
}

export default Classic;