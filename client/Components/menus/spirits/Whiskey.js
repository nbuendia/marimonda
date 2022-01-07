import React, { useState } from "react";

//MATERIAL UI
import { Container, Grid, Tab, Tabs } from "@mui/material";

//COMPONENTS
import Bourbon from "./whiskeys/Bourbon";
import Rye from "./whiskeys/Rye";
import Scotch from "./whiskeys/Scotch";

function Whiskey() {
    const [value, setValue] = useState('bourbon');
    function handleChange(event, newValue) {
        setValue(newValue)
    }

    return(
        <>
            <Container>
                <Tabs centered value={value} onChange={handleChange}>
                    <Tab label='BOURBON' value={'bourbon'} />
                    <Tab label='RYE' value={'rye'} />
                    <Tab label='SCOTCH' value={'scotch'} />
                </Tabs>
                <Grid container spacing={0}>
                    {value === 'bourbon' ? <Bourbon />
                    : value === 'rye' ? <Rye />
                    : <Scotch />}
                </Grid>
            </Container>
        </>
    )
}

export default Whiskey;