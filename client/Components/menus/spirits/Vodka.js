import React from "react";

//MATERIAL UI
import { Box, Grid, Paper, Typography } from "@mui/material";

import data from '../menuData/spirits.json';

function Vodka() {
    const vodkas = data.filter((spirit) => spirit.category === 'vodka');

    return(
        <>
            {vodkas.map((vodka) => (
                <Grid item xs={12} key={vodka.id}>
                    <Paper elevation={0} className="spirit-paper-container" style={{backgroundColor: 'transparent'}}>
                        <Box>
                            <Typography fontSize={18}>
                                {vodka.name}
                            </Typography>
                        </Box>
                        <Typography fontSize={18}>
                            ${vodka["neat-price"]}
                        </Typography>
                    </Paper>
                </Grid>
            ))}
        </>
    )
}

export default Vodka;