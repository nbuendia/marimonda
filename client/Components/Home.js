import React from "react";

//MATERIAL UI
import { Box, Container } from "@mui/material";

//COMPONENTS
import Address from "./home/Address";
import Schedule from "./home/Schedule";
import DailySpecials from "./home/DailySpecials";
import HappyHour from "./home/HappyHour";
import Photos from "./home/Photos";

function Home() {
    return(
        <>
            <Container style={{height: '95vh'}} />
            <Container className="home-info-container">
                <hr className="hr-splitter" style={{marginBottom: '25px'}}/>
                <Box>
                    <Address />
                </Box>
                <hr className="hr-address-splitter" />
                <Box className="info-inner-container">
                    <Schedule />
                    <DailySpecials />
                    <HappyHour />
                </Box>
            </Container>
            <hr className="hr-splitter"/>
            <Container className="blur" style={{paddingTop: '25px', marginBottom: '5vh'}} >
                <Photos />
                <hr className="hr-splitter" style={{marginTop: '25px'}}/>
            </Container>
        </>
    )
}

export default Home;