import React, { useState } from "react";

//MATERIAL UI
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";

//COMPONENTS
import Vodka from "./spirits/Vodka";
import Gin from "./spirits/Gin";
import Rum from "./spirits/Rum";
import Whiskey from "./spirits/Whiskey";
import TeqMez from "./spirits/TeqMez";

function SpiritsWines() {
    const [value, setValue] = useState('vodka');
    function handleChange(event, newValue) {
        setValue(newValue)
    }

    return(
        <>
            <Container className="container blur">
                <Box className="inner-container">
                    <Tabs centered variant="fullWidth" value={value} onChange={handleChange}>
                        <Tab label='VODKA' value={'vodka'} />
                        <Tab label='GIN' value={'gin'} />
                        <Tab label='RUM' value={'rum'} />
                        <Tab label='TEQUILA' value={'tequila'} />
                        <Tab label='WHISKEY' value={'whiskey'} />
                    </Tabs>
                    <Grid container spacing={0}>
                        {value === 'tequila' || value === 'whiskey' ? '' 
                            :
                                <>
                                    <Grid item xs={6}>
                                        <Typography fontSize={20} fontWeight={'bold'} borderBottom={2} marginLeft={'25px'}>
                                            NAME
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography fontSize={20} fontWeight={'bold'} borderBottom={2} textAlign={'right'} marginRight={'25px'}>
                                            PRICE
                                        </Typography>
                                    </Grid>
                                </>
                        }
                        {value === 'vodka' ? <Vodka />
                        : value === 'gin' ? <Gin />
                        : value === 'rum' ? <Rum />
                        : value === 'tequila' ? <TeqMez />
                        : <Whiskey />}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default SpiritsWines;