import React from "react";

//MATERIAL UI
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

function FutureEventCards(props) {
    const { games, djs } = props;

    return(
        <>
            <Box style={{marginTop: '20px'}}>
                {games.length ?
                    <>
                        <Card style={{display: 'flex', backgroundColor: 'rgba(255, 51, 51, .8)',  padding: 10, marginBottom: 10}}>
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
                    </> : ''
                }

                {djs.length ?
                    <>
                        <Card style={{display: 'flex', backgroundColor: 'rgba(255, 51, 51, .8)', padding: 10, marginBottom: 10}}>
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
                    </> : ''
                }
            </Box>
        </>
    )
}

export default FutureEventCards;