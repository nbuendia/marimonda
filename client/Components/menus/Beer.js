import React, { useState } from "react";

//MATERIAL UI
import { Box, Container, Grid, Tab, Tabs } from "@mui/material";

//COMPONENTS
import Cans from "./beers/Cans";
import Bottles from "./beers/Bottles";
import Drafts from "./beers/Drafts";

function Beer() {
    const [value, setValue] = useState('can');
    function handleChange(event, newValue) {
        setValue(newValue)
    }

    return(
        <>
            <Container className='container blur'>
                <Box className='inner-container'>
                    <Tabs centered variant="fullWidth" value={value} onChange={handleChange}>
                        <Tab label='CANS' value='can' />
                        <Tab label='BOTTLES' value='bottle' />
                        <Tab label='DRAFTS'value='draft' />
                    </Tabs>
                    <Grid container spacing={1} justifyContent={'center'}>
                        {value === 'can' ? <Cans />
                        : value === 'bottle' ? <Bottles />
                        : <Drafts />}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Beer;