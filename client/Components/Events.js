import React, { useState } from "react";
import Calendar from 'react-calendar';

//MATERIAL UI
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import Photos from "./home/Photos";
import EventList from "./events/EventList";

function Events() {
    const [date, onChange] = useState(new Date());
    
    // function handleChange(event, newValue) {
    //     console.log('iWORK');
    //     // setValue(newValue)
    // }

    return(
        <>
            <Container className='container blur'>
                {/* <Typography textAlign={'center'} fontSize={25}>HEADING</Typography> */}
                <Box className="blur" style={{display: 'flex', height: '75vh', justifyContent: 'space-between'}}>
                    <EventList date={date}/>
                    <Box style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignContent: 'center'}}>
                        <Calendar 
                            value={date} 
                            onChange={onChange} 
                            // onClickDay={handleChange} 
                            // selectRange={true} 
                        />
                        <Photos />
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Events;