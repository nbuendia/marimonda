import React from "react";

//MATERIAL UI
import { Box, Container, Typography } from "@mui/material";
import { withStyles } from '@mui/styles';

const styles = {
    container: {
        marginTop: '20vh',
        height: '80vh'
    },
    innerContainer: {
        paddingTop: '10vh'
    }
};

function Home(props) {
    const { classes } = props;

    return(
        <>
            <Container className={classes.container}>
                <Box className={classes.innerContainer}>
                    <Typography>
                        246 ANYPLACE ST,
                        12345 NEW YORK, NY
                    </Typography>
                    <br/>
                    <Typography>
                        <b><u>HOURS OF OPERATION</u></b><br/>
                        MONDAY | 11am - 10pm <br/>
                        TUESDAY | 11am - 10pm <br/>
                        WEDNESDAY | 10am - 12am <br/>
                        THURSDAY | 10am - 12am <br/>
                        FRIDAY | 10am - 2am <br/>
                        SATURDAY | 11am - 2am <br/>
                        SUNDAY | 11am - 12am
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default withStyles(styles)(Home);