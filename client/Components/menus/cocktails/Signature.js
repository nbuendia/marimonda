import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

//MATERIAL UI
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
//MATERIAL UI ICONS
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import data from '../menuData/cocktails.json';

function Signature() {
    const signatures = data.filter((cocktail) => cocktail.type === 'signature');

    return(
        <>
            {signatures.map((cocktail) => (
                <Grid item key={cocktail.id} xs={3}>
                    <Card className='flex-row' style={{backgroundColor: 'rgba(200, 200, 200, 0.7)'}}>
                        <CardContent className="cocktail-card-content">
                            <Box className="flex-col cocktail-name-price-signature">
                                <Typography fontSize={20}><b>{cocktail.name}</b></Typography>
                                <Typography fontSize={16}><b>${cocktail.price}</b></Typography>
                            </Box>
                            <Box className="flex-row drink-description" fontSize={15}>
                                <ReactReadMoreReadLess
                                    charLimit={49}
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

export default Signature;