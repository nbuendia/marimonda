import React from "react";

//MATERIAL UI
import { Box, Container } from "@mui/material";

//COMPONENTS
import Address from "./home/Address";
import Schedule from "./home/Schedule";
import DailySpecials from "./home/DailySpecials";
import HappyHour from "./home/HappyHour";

function Home() {
    return(
        <>
            <Container className='container'>
                <Box className='address-container'>
                    <Address />
                </Box>
                <Box className="flex-row" justifyContent={'space-between'} textAlign={'center'}>
                    <Box width={250}>
                        <Schedule />
                    </Box>
                    <Box width={250}>
                        <Box height={200}>
                            <DailySpecials />
                        </Box>
                        <Box>
                            <HappyHour />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Home;