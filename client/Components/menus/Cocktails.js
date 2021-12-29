import React, { useState } from "react";

//MATERIAL UI
import { Box, Container, Grid, Tab, Tabs } from "@mui/material";

//COMPONENTS
import Classic from "./cocktails/Classic";
import Signature from "./cocktails/Signature";

function Cocktails() {
    const [value, setValue] = useState('classic');
    function handleChange(event, newValue) {
        setValue(newValue)
    }

    return(
        <>
            <Container className="container">
                <Box className="inner-container">
                    <Tabs centered variant="fullWidth" value={value} onChange={handleChange}>
                        <Tab label='CLASSIC' value={'classic'}/>
                        <Tab label='SIGNATURE' value={'signature'}/>
                    </Tabs>
                    <Grid container spacing={1} justifyContent={'center'}>
                        {value === 'classic' ? <Classic /> : <Signature />}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Cocktails;