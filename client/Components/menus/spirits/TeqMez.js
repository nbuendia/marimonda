import React, { useState } from "react";

//MATERIAL UI
import { Container, Grid, Tab, Tabs } from "@mui/material";

//COMPONENTS
import Tequila from "./teq-mez/Tequila";
import Mezcal from "./teq-mez/Mezcal";

function TeqMez() {
    const [value, setValue] = useState('tequila');
    function handleChange(event, newValue) {
        setValue(newValue)
    }

    return(
        <>
            <Container>
                <Tabs centered value={value} onChange={handleChange}>
                    <Tab label='TEQUILA' value={'tequila'} />
                    <Tab label='MEZCAL' value={'mezcal'} />
                </Tabs>
                <Grid container spacing={0}>
                    {value === 'tequila' ? <Tequila />
                    : <Mezcal />}
                </Grid>
            </Container>
        </>
    )
}

export default TeqMez;