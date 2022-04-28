import { Box, Button, TextField } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import SendIcon from '@mui/icons-material/Send';
import useSentMsgs from "../context/ContextProvider";

const RightInput = () => {

  const [value, setValue] = React.useState('');
  const { addSentMsgs, allMessages } = useSentMsgs();
  
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const personName = 2;
    const bubble = { personName , value};
    addSentMsgs(bubble);
    // console.log(msgs);
  }


  return (
    <Box component="form" padding={5}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'end' },
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 5,
        
      }} > 
      
      <TextField
          id="standard-multiline-static"
          label="Person 2 message here"
          multiline
          rows={2}
          variant="standard"
          sx={{ 
            flex: 4
           }}
          onChange={handleChange}
        />
      <Button variant="contained" endIcon={<SendIcon />} 
        sx={{ 
            flex: 1,
            marginLeft: 2
        }}
        onClick = {handleClick}
      >
        Send
      </Button>
      {/* <h1>{console.log(msgs)}</h1> */}
      {/* {msgs.map(({ id, person, message }) => (
        <p key={msgs.id}>Coffee type {msgs.person} in a {msgs.message} size.</p>
      ))} */}
    </Box>
  )
}

export default RightInput;