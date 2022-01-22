import React from "react";

//MATERIAL UI
import { Box, Container, rgbToHex, Typography } from "@mui/material";

//COMPONENTS
import Address from "./home/Address";
import Schedule from "./home/Schedule";
import DailySpecials from "./home/DailySpecials";
import HappyHour from "./home/HappyHour";
import Photos from "./home/Photos";
import SocialMedia from "./home/SocialMedia";

function Home() {
    return(
        <>
            <Container style={{height: '20vh'}} />

            <hr className="hr-splitter"/>
            <Box className="specials-container blur">
                <DailySpecials />
                <HappyHour />
            </Box>

            <hr className="hr-splitter"/>
            <Container style={{height: '60vh'}}/>
            {/* <Container style={{height: '60vh', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '5vw'}} >
                <Photos />
                <Schedule />
            </Container> */}
            <hr className="hr-splitter"/>

            <Container className="home-footer-container blur">
                <Box className="home-footer-address">
                    <Address />
                </Box>
                <hr className="hr-address-splitter" />
                <SocialMedia />
            </Container>
            <hr className="hr-splitter" style={{marginBottom: '5vh'}}/>
        </>
    )
}

export default Home;