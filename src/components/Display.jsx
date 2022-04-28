import { Box } from "@mui/material"
import { useContext } from "react";
import { SentMsgsContext } from '../context/ContextProvider';


const Display = () => {
    const boxStyle = {
//
    }

    const [msgs, setMsgs] = useContext(SentMsgsContext);

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