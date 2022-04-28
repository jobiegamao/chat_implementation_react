import { Box, Grid, Typography } from "@mui/material"
import { useContext, useEffect } from "react";
import useSentMsgs from "../context/ContextProvider";
import DisplayBubble from "./DisplayBubble";



const Display = () => {

    const { addSentMsgs, deleteSentMsg, allMessages } = useSentMsgs()

    useEffect( () => {
      console.log(allMessages)
    }, [allMessages])

  return (
    <Grid item xs={12}>
      <Box component="form" padding={5}
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          bgcolor: 'background.paper',
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
    </Grid>
  )
}

export default Display