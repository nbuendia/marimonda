import { Box, Container, Typography } from "@mui/material";
import { typography, width } from "@mui/system";
import React, {Component} from "react";

class Home extends Component {
    render() {
        return(
            <>
                <Box style={{display: 'flex', justifyContent: 'space-between', textAlign: 'center'}}>
                    {/* <Box style={{marginTop: '25vh', width: '23vw'}}>
                        <Typography >
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
                    <Box style={{marginTop: '25vh', width: '23vw'}}>
                        MORE STUFF HERE
                    </Box> */}
                </Box>
            </>
        )
    }
}

export default Home;