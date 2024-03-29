import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

//MATERIAL UI
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
//MATERIAL UI ICONS
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import data from '../menuData/beers.json';

function Bottles() {
    const bottles = data.filter((beer) => beer.container === 'bottle');

    return(
        <>
            {bottles.map((beer) => (
                <Grid item key={beer.id} xs={4}>
                    <Card style={{backgroundColor: 'rgba(200, 200, 200, 0.7)'}}>
                        <CardContent >
                            <Box className="flex-row beer-name-price">
                                <Box>
                                    <Typography fontSize={18}><b>{beer.name}</b></Typography>
                                    <Typography fontSize={13}><i>{beer.type}</i></Typography>
                                </Box>
                                <Typography fontSize={18}><b>${beer.price}</b></Typography>
                            </Box>
                            <Box className="flex-row drink-description">
                                <ReactReadMoreReadLess
                                    charLimit={50}
                                    readMoreText={<KeyboardArrowDownIcon />}
                                    readLessText={<ExpandLessIcon />}
                                >
                                    {beer.description}
                                </ReactReadMoreReadLess>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </>
    )
}

export default Bottles;