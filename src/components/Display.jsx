import { Box } from "@mui/material"
import { useContext, useEffect } from "react";
import useSentMsgs from "../context/ContextProvider";



const Display = () => {
    const boxStyle = {
//
    }

    const { addSentMsgs, allMessages } = useSentMsgs()

    useEffect( () => {
      console.log(allMessages)
    }, [allMessages])

  return (
    <Box component="form" padding={5}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'end',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 4,
        fontWeight: 'bold',
        
      }} > 

      <p>hello</p>

      </Box>
  )
}

export default Display