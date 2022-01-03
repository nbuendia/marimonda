import React, { useState } from "react";

//MATERIAL UI
import { Box, Button, Typography } from "@mui/material";


function Address() {
    const [showAddress, setShowAddress] = useState(false);

    function handleChangeAddress() {
        setShowAddress(!showAddress);
    }

    return(
        <Box className='address-container'>
            <Button disableRipple variant="text" onClick={handleChangeAddress} className='blur'>
                {showAddress ? 
                    <Typography color='black' fontSize={25} className="address">
                        <b>246 ANYPLACE ST,
                        12345 NEW YORK, NY</b>
                    </Typography> : 
                    <Typography color='black' fontSize={25} className="address">
                    <b>ADDRESS</b>
                    </Typography>
                }
            </Button>
        </Box>
    )
}

export default Address;