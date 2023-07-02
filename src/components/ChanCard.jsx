import React from 'react';
import {Box, CardContent , CardMedia, Typography} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChanCard = () => {
  return (
    <Box
    sx={{
      boxShadow:'none',
      borderRadius:'20px'
    }}
    >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
      sx={{display:'flex',flexDirection:'colum',justifyContent:'center',textAlign:'center',color:'#fff'}}
      >

      </CardContent>
    
    </Link>
      
      ChanCard</Box>
  )
}

export default ChanCard    //channelCard