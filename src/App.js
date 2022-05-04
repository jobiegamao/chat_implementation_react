
import { Grid } from '@mui/material';
import './App.css';
import {Display} from './components/Display';
import {Inputbox} from './components/Inputbox';
import { ContextProvider } from './context/ContextProvider';


function App() {
  const pageStyle = {
    p: { xs: 2, md: 10 }
  }
  return (
    <ContextProvider>
      <Grid container spacing={3} sx={pageStyle}>
        <Grid item xs={12}>
          <Display />
        </Grid>
        <Grid item xs={12} md={6}>
          <Inputbox personName="Left"  />
        </Grid>
        <Grid item xs={12} md={6}>
          <Inputbox personName="Right"  />
        </Grid>
      </Grid>
    </ContextProvider>

  
  );
}

export default App;
