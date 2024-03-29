import React from "react";
import data from './eventData/events.json'

//MATERIAL UI
import { Box, Typography } from "@mui/material";

//COMPONENTS
import TodaysEventCard from "./TodaysEventCard";
import FutureEventCards from "./FutureEventCards";

function EventList(props) {
    const { date } = props;
    //ddd MMM DD YYYY
    let todaysDate = date.toDateString().split(' ');
    let formattedDate = `${todaysDate[1]} ${todaysDate[2]}, ${todaysDate[3]}`.toLowerCase();
    
    //TODAYS EVENTS
    const todaysSoccerGames = data.filter((event) => event.type === 'test-sports-soccer' && event.date === formattedDate);
    const todaysDjs = data.filter((event) => event.type === 'test-dj' && event.date === formattedDate);
    
    //FUTURE EVENTS
    const futureSoccerGames = data.filter((event) => event.type === 'test-sports-soccer' && event.date !== todaysDate);
    const futureDjs = data.filter((event) => event.type === 'test-dj' && event.date !== todaysDate);

    return(
        <>
            <Box className="scrollbar" style={{width: '60%', padding: 15, overflowY: 'auto'}}>
                <Typography fontSize={25} textAlign={'center'}>
                    List of Events for:
                    <br/>
                    <span style={{fontSize: 20, fontWeight: 800}}>
                        {`${todaysDate[0]}, ${todaysDate[1]} ${todaysDate[2]}, ${todaysDate[3]}`}
                    </span>
                </Typography>

                {todaysSoccerGames.length || todaysDjs.length ? 
                    <TodaysEventCard games={todaysSoccerGames} djs={todaysDjs}/> 
                    : 
                    <Typography fontSize={20} textAlign={'center'} marginTop={5}>
                        No Current Events<br/>
                        Book your event with us today!
                    </Typography>
                }

                <hr/>
                
                {/* <Typography fontSize={25} textAlign={'center'} marginTop={2}>
                    Upcoming Events
                </Typography>

                {futureSoccerGames.length || futureDjs.length ?
                    <FutureEventCards games={futureSoccerGames} djs={futureDjs}/> 
                    : 
                    <Typography>
                        No Future Events
                    </Typography>
                }                 */}
            </Box>
        </>
    )
}

export default EventList;