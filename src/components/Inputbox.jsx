import { Box, Button, TextField } from '@mui/material';
import React, { useRef } from 'react';
import SendIcon from '@mui/icons-material/Send';
import uuid from 'react-uuid';
import { useSentMsgsContext } from '../context/ContextProvider';

export const Inputbox = ( {personName }) => {
  const textRef = useRef(null);
  const { addSentMsgs } = useSentMsgsContext();
  
  const handleClick = (e) => {
    e.preventDefault();
    const bubble = { 
      id: uuid(),
      name: personName ,
      message: textRef.current.value
    };
    addSentMsgs(bubble);
    textRef.current.value = '';
  }


  return (
  
      <Box component="form"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'end', md: 'end' },
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: 5,
          p: { xs: 3, md: 5 },
          
        }} > 
      
        <TextField
            id="standard-multiline-static"
            label= {`Person ${personName} message here`}
            multiline
            rows={2}
            variant="standard"
            size="small"
            sx={{ 
              flex: 4,
              width: '100%'
            }}
            inputRef = {textRef}
          />
        <Button variant="contained" endIcon={<SendIcon />} 
          sx={{ 
              flex: 1,
              ml: { md: 2 },
              mt: { xs: 3 },  
          }}
          onClick = {handleClick}
        >Send</Button>
      </Box>
  )
};