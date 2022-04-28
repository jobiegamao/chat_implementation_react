
import { Box, Container, Grid } from '@mui/material';
import  styled  from 'styled-components';
import './App.css';
import Display from './components/Display';
import LeftInput from './components/LeftInput';
import RightInput from './components/RightInput';
import { ContextProvider } from './context/ContextProvider';


function App() {
  const pageStyle = {
    p: 10
  }
  return (
    <ContextProvider>
      <Grid container spacing={3} sx={pageStyle}>
        <Grid item xs={12}>
            <Display />
        </Grid>
        <Grid item xs={12} md={6}>
          <LeftInput  />
        </Grid>
        <Grid item xs={12} md={6}>
          <RightInput  />
        </Grid>
      </Grid>
    </ContextProvider>

  
  );
}

export default App;
