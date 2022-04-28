import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import useSentMsgs from "../context/ContextProvider";

const Inputbox = ( {personName }) => {

  const [value, setValue] = useState('');
  const { addSentMsgs, allMessages } = useSentMsgs();
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const bubble = { personName , value};
    addSentMsgs(bubble);
    setValue('');
  }


  return (
    <Grid item xs={12} md={6}>
      <Box component="form"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'end' },
          bgcolor: 'background.paper',
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: 5,
          p: 5,
          
        }} > 
      
        <TextField
            id="standard-multiline-static"
            label= {`Person ${personName} message here`}
            multiline
            rows={2}
            variant="standard"
            sx={{ 
              flex: 4
            }}
            onChange={handleChange}
            value={value}
          />
        <Button variant="contained" endIcon={<SendIcon />} 
          sx={{ 
              flex: 1,
              marginLeft: 2
          }}
          onClick = {handleClick}
        >Send</Button>
      </Box>
    </Grid>
  )
}

export default Inputbox