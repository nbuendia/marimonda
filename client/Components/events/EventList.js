import React from "react";

//MATERIAL UI
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

function EventList(props) {
    const { date } = props;
    let todaysDate = date.toDateString().split(' ');

    // let todaysDate = Array.isArray(date) ? new Date().toDateString().split(' ') : date.toDateString().split(' ');

    // const options = { dateStyle: "full" };
    // const testDate = new Date(todaysDate[3], 0, todaysDate[2]);
    // let formattedDate = new Intl.DateTimeFormat('en-US', options).format(testDate);

    let weekday = todaysDate[0];
    let month = todaysDate[1];
    let day = todaysDate[2];
    let year = todaysDate[3];

    console.log(date);

    return(
        <>
            <Box style={{width: '60%'}}>
                <Typography fontSize={25} textAlign={'center'}>
                    List of Events for:
                </Typography>
                <Typography fontSize={20} fontWeight={'bold'} textAlign={'center'}>
                    {`${weekday}, ${month} ${day}, ${year}`}
                </Typography>
                <Box style={{marginTop: '25px'}}>
                    <Card style={{display: 'flex', padding: 10, backgroundColor: 'rgba(255, 51, 51, .8)'}}>
                        <CardMedia
                            component='img'
                            style={{width: 150, borderTopLeftRadius: 15, borderBottomRightRadius: 15}}
                            image='https://i.imgur.com/kOEWintm.jpg'
                            alt='Event Image'
                        />
                        <CardContent >
                            <Typography>EVENT TITLE</Typography>
                            <Typography>EVENT DESCRIPTION</Typography>
                            <Typography>EVENT DURATION/TIME</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </>
    )
}

export default EventList;