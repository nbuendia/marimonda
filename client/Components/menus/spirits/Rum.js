import React from "react";

//MATERIAL UI
import { Box, Grid, Paper, Typography } from "@mui/material";

import data from '../menuData/spirits.json';

function Rum() {
    const rums = data.filter((spirit) => spirit.category === 'rum');

    return(
        <>
            {rums.map((rum) => (
                <Grid item xs={12} key={rum.id}>
                    <Paper elevation={0} className="spirit-paper-container" style={{backgroundColor: 'transparent'}}>
                        <Box>
                            <Typography fontSize={18}>
                                {rum.name}
                            </Typography>
                        </Box>
                        <Typography fontSize={18}>
                            ${rum["neat-price"]}
                        </Typography>
                    </Paper>
                </Grid>
            ))}
        </>
    )
}

export default Rum;