import { Remove } from '@mui/icons-material';
import { Box, styled } from '@mui/material'
import React, { useState } from 'react'

//using styled-components from mui-material
const NameDiv = styled("div")({ 
    marginRight:5,
});

const MsgDiv = styled("div")({});


export const DisplayBubble = ({ personName, message, handleDelete }) => {
    const [showDelete, setShowDelete] = useState(false);
  return (
    <Box 
        sx={{ 
            display: 'flex',
            alignItems:'center',
            mt:2,
            p:1,
            color: personName === 'Left' ? 'green' : 'red',
            fontSize: 15,
            '&:hover': {
                background: 'lightgray',                
            },
            
        }}
        onMouseEnter={() => setShowDelete(true)}
        onMouseLeave={() => setShowDelete(false)}
    >
        
        <NameDiv>{personName}:</NameDiv>
        <MsgDiv>{message}</MsgDiv>
        
        {showDelete && 
            <Remove onClick={handleDelete} 
            sx={{
                ml: 'auto',
                cursor:'pointer',
                height: 15
                }} 
            />
        }
        
    </Box>
  )
};