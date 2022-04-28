import { Box, Grid, Typography } from "@mui/material"
import { useContext, useEffect } from "react";
import useSentMsgs from "../context/ContextProvider";
import DisplayBubble from "./DisplayBubble";



const Display = () => {

    const { addSentMsgs, allMessages } = useSentMsgs()

    useEffect( () => {
      console.log(allMessages)
      const displayMsgs = allMessages;
    }, [allMessages])

  return (
    <Grid item xs={12}>
      <Box component="form" padding={5}
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          bgcolor: 'background.paper',
          borderRadius: '12px',
          boxShadow: 4,
          fontWeight: 'bold',
          maxHeight: 200, 
          height: 200, 
          overflow: 'auto'
        }} > 

        <Typography variant="caption"> Your chat starts here </Typography>
        {
          allMessages.map((msg, index) => (
            <DisplayBubble 
              key={msg.index}
              personName={msg.personName}
              message={msg.value}
            />
          ))
        }

        </Box>
    </Grid>
  )
}

export default Display