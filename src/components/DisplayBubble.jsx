import { HighlightOffOutlined } from '@mui/icons-material';
import { Box, styled, Typography } from '@mui/material'
import React, { useState } from 'react'

const NameDiv = styled("div")({
    marginLeft:5,
    marginRight:5

});

const MsgDiv = styled("div")({
 
});


const DisplayBubble = ({ personName, message, handleDelete }) => {
    const [showDelete, setShowDelete] = useState(false);
  return (
    <Box 
        sx={{ 
            display:'flex' ,
            mt:2, 
            color: personName == 'Left' ? 'green' : 'red',
            fontSize: 15,
            // '&:hover': {
            //     background: "rgb(7, 177, 77, 0.42)", 
            //     cursor:'pointer'               
            // }
        }}
        onMouseEnter={() => setShowDelete(true)}
        onMouseLeave={() => setShowDelete(false)}
    >
        {showDelete && 
            <HighlightOffOutlined onClick={handleDelete} fontSize='small' cursor='pointer' />
        }
        <NameDiv>{personName}:</NameDiv>
        <MsgDiv>{message}</MsgDiv>

        
    </Box>

  )
}

export default DisplayBubble