import React from "react";

//MATERIAL UI
import { Box, IconButton, Typography } from "@mui/material";
//MATERIAL UI ICONS
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function SocialMedia() {
    return(
        <>
            <Typography fontSize={20} fontWeight={'bold'} textAlign={'center'}>
                FOLLOW US!
            </Typography>
            <Box className='address-container'>
                <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/">
                    <IconButton>
                        <FacebookIcon style={{color: '#3B5998'}}/>
                    </IconButton>
                </a>
                
                <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/">
                    <IconButton>
                        <InstagramIcon className="ig-icon"/>
                    </IconButton>
                </a>

                <a target='_blank' rel="noopener noreferrer" href="https://twitter.com/">
                    <IconButton>
                        <TwitterIcon style={{color: '#00acee'}}/>
                    </IconButton>
                </a>
            </Box>
        </>
    )
}

export default SocialMedia;