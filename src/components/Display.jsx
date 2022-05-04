import { Box, Typography } from "@mui/material"
import { useSentMsgsContext } from "../context/ContextProvider";
import { DisplayBubble } from "./DisplayBubble";

export const Display = () => {
  const {deleteSentMsg, allMessages } = useSentMsgsContext();

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
};