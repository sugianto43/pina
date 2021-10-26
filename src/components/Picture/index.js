import React from 'react';
import {Box} from '@material-ui/core';

const Picture = ({image}) => {
  return (
    <Box
      style={{
        filter: "drop-shadow(-10px 10px 10px rgba(0, 0, 0, 0.06))"
      }}
    >
      <img src={image} alt="" />
    </Box>
  )
}

export default Picture
