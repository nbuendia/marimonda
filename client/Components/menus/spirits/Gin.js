import React from "react";

//MATERIAL UI
import { Box, Grid, Paper, Typography } from "@mui/material";

import data from '../menuData/spirits.json';

function Gin() {
    const gins = data.filter((spirit) => spirit.category === 'gin');

    return(
        <>
            {gins.map((gin) => (
                <Grid item xs={12} key={gin.id}>
                    <Paper elevation={0} className="spirit-paper-container" style={{backgroundColor: 'transparent'}}>
                        <Box>
                            <Typography fontSize={18}>
                                {gin.name}
                            </Typography>
                        </Box>
                        <Typography fontSize={18}>
                            ${gin["neat-price"]}
                        </Typography>
                    </Paper>
                </Grid>
            ))}
        </>
    )
}

export default Gin;