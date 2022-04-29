import { Box, Typography } from "@mui/material"
import { useEffect } from "react";
import useSentMsgsContext from "../context/ContextProvider";
import DisplayBubble from "./DisplayBubble";



const Display = () => {

    const {deleteSentMsg, allMessages } = useSentMsgsContext();

    // useEffect( () => {
    //   console.log(allMessages)
    // }, [allMessages])

  return (
    
      <Box component="form" padding={5}
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          borderRadius: '12px',
          boxShadow: 4,
          maxHeight: 200, 
          height: 200, 
          overflow: 'auto'
        }} > 

        <Typography variant="caption" color='gray'> Your chat starts here </Typography>
        {
          allMessages.map((msg) => (
            <DisplayBubble 
              key={msg.id}
              personName={msg.name}
              message={msg.message}
              handleDelete={() => deleteSentMsg(msg.id)}
            />
          ))
        }

        </Box>
  
  )
}

export default Display