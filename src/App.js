
import { Box, Container, Grid } from '@mui/material';
import './App.css';
import Display from './components/Display';
import Inputbox from './components/Inputbox';
import { ContextProvider } from './context/ContextProvider';


function App() {
  const pageStyle = {
    p: 10
  }
  return (
    <ContextProvider>
      <Grid container spacing={3} sx={pageStyle}>
        <Display />
        <Inputbox personName="Left"  />
        <Inputbox personName="Right"  />
      </Grid>
    </ContextProvider>

  
  );
}

export default App;
