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
                        <InstagramIcon style={{borderRadius: '20%', background: 'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)'}}/>
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