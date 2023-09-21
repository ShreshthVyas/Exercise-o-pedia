import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import HeroBannerImage from '../assets/images/gym2.jpg';
import { getAutoHeightDuration } from '@mui/material/styles/createTransitions';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px" >
      Exercise-o-pedia
    </Typography>
      <Typography color ='#FF2625' fontWeight ="600" fontSize='26px '>
      Push Past <br />
      Your Limits
      </Typography>
      <Typography fontSize="18px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img"  />
    </Box>
  )
}

export default HeroBanner