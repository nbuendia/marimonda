import React, { useState } from "react";

//MATERIAL UI
import { Box, Button, Container, IconButton, Typography } from "@mui/material";

//COMPONENTS
import Address from "./home/Address";
import Schedule from "./home/Schedule";
import DailySpecials from "./home/DailySpecials";

function Home() {
    return(
        <>
            <Container className='container'>
                <Box className='address-container'>
                    <Address />
                </Box>
                <Box className="flex-row" style={{justifyContent: 'space-between', textAlign: 'center'}}>
                    <Box>
                        <Schedule />
                    </Box>
                    <Box>
                        <DailySpecials />
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Home;