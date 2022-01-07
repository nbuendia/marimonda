import React from "react";

//MATERIAL UI
import { Box, Grid, Paper, Typography } from "@mui/material";

import data from '../../menuData/spirits.json';

function Tequila() {
    const tequilas = data.filter((spirit) => spirit.category === 'tequila');

    return(
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
            {tequilas.map((tequila) => (
                <Grid item xs={12} key={tequila.id}>
                    <Paper elevation={0} className="spirit-paper-container" style={{backgroundColor: 'transparent'}}>
                        <Box>
                            <Typography fontSize={18}>
                                {tequila.name}
                            </Typography>
                        </Box>
                        <Typography fontSize={18}>
                            ${tequila["neat-price"]}
                        </Typography>
                    </Paper>
                </Grid>
            ))}
        </>
    )
}

export default Tequila;