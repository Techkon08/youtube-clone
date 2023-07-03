import React from 'react';
import { Stack, Box } from '@mui/material';
import ChanCard from './ChanCard';
import VideoCard from './VideoCard';

const Videos = ({ videos ,direction}) => {
  // if (!Array.isArray(videos)) {
  //   return <p>No videos found.</p>;
  // }
  if(!videos?.length)return 'loading...'

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChanCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
