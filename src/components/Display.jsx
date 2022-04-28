import { Box } from "@mui/material"
import { useContext, useEffect } from "react";
import useSentMsgs from "../context/ContextProvider";



const Display = () => {

    const { addSentMsgs, allMessages } = useSentMsgs()

    useEffect( () => {
      console.log(allMessages)
      const displayMsgs = allMessages;
    }, [allMessages])

  return (
    <Box component="form" padding={5}
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'start',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 4,
        fontWeight: 'bold',
        maxHeight: 300, 
        overflow: 'auto'
      }} > 

      <h6>Your Chat Starts Here</h6>
      {
        allMessages.map((msg, index) => (
          <Box>
            {msg.personName}: {msg.value}
          </Box>
        ))
      }

      </Box>
  )
}

export default Display