import { Box, styled, Typography } from '@mui/material'
import React from 'react'

const NameDiv = styled("div")({
 marginRight: 5
});

const MsgDiv = styled("div")({
 
});


const DisplayBubble = ({personName, message, index}) => {

  return (
    <Box 
        sx={{ 
            display:'flex' ,
            mt:2, 
            color: personName == 'Left' ? 'green' : 'red',
            fontSize: 15
        }}
    >
        <NameDiv>{personName}:</NameDiv>
        <MsgDiv>{message}</MsgDiv>
    </Box>

  )
}

export default DisplayBubble