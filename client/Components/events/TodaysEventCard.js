import React from "react";

//MATERIAL UI
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

function TodaysEventCard(props) {
    const { games, djs } = props;
    const genericSportImg = 'https://i.imgur.com/qavLjLf.png';
    const genericDjImg = 'https://i.imgur.com/G7KyVBY.png';

    return(
        <>
            <Box style={{marginTop: '20px'}}>
                {games.length ?
                    <>
                        {games.map((game) => (
                            <Card key={game.id} style={{display: 'flex', backgroundColor: 'rgba(255, 51, 51, .8)',  padding: 10, marginBottom: 10}}>
                                <CardMedia
                                    component='img'
                                    style={{width: 125, borderTopLeftRadius: 15, borderBottomRightRadius: 15, backgroundColor: 'rgba(211, 211, 211, 0.5)'}}
                                    image={game.img === null ? genericSportImg : game.img}
                                    alt='Event Image'
                                />
                                <CardContent style={{width: '100%'}}>
                                    <Typography fontSize={35} fontWeight={800} textAlign={'center'}>
                                        {game.title.toUpperCase()}
                                    </Typography>
                                    <Typography fontSize={20} fontWeight={800} textAlign={'center'}>
                                        {game.description}
                                    </Typography>
                                    <br/>
                                    <Typography fontSize={20} textAlign={'center'}>
                                        Game start time: <b>{game.time}</b>
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </> : ''
                }

                {djs.length ?
                    <>
                        {djs.map((dj) => (
                            <Card key={dj.id} style={{display: 'flex', backgroundColor: 'rgba(255, 51, 51, .8)', padding: 10, marginBottom: 10}}>
                                <CardMedia
                                    component='img'
                                    style={{width: 125, borderTopLeftRadius: 15, borderBottomRightRadius: 15}}
                                    image={dj.img === null ? genericDjImg : dj.img}
                                    alt='Event Image'
                                />
                                <CardContent style={{width: '100%'}}>
                                    <Typography fontSize={35} fontWeight={800} textAlign={'center'}>
                                        {dj.title}
                                    </Typography>
                                    <Typography fontSize={20} fontWeight={800} textAlign={'center'}>
                                        {dj.description}
                                    </Typography>
                                    <br/>
                                    <Typography fontSize={20} textAlign={'center'}>
                                        DJ spin time: <b>{dj.time}</b>
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </> : ''
                }
            </Box>
        </>
    )
}

export default TodaysEventCard;