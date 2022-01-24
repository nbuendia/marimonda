import React from "react";

//MATERIAL UI
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

function FutureEventCards(props) {
    const { games, djs } = props;

    return(
        <>
            <Box style={{marginTop: '20px'}}>
                <Card style={{display: 'flex', padding: 10, backgroundColor: 'rgba(255, 51, 51, .8)'}}>
                    <CardMedia
                        component='img'
                        style={{width: 150, borderTopLeftRadius: 15, borderBottomRightRadius: 15}}
                        image='https://i.imgur.com/kOEWintm.jpg'
                        alt='Event Image'
                    />
                    <CardContent >
                        <Typography>EVENT TITLE</Typography>
                        <Typography>EVENT DATE</Typography>
                        <Typography>EVENT DURATION/TIME</Typography>
                        <Typography>EVENT DESCRIPTION</Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default FutureEventCards;