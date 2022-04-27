
import { Box, Container } from '@mui/material';
import  styled  from 'styled-components';
import './App.css';
import Display from './components/Display';
import LeftInput from './components/LeftInput';
import RightInput from './components/RightInput';


function App() {

  return (
    <Box border={1} sx={{ 
      display: 'grid',

     }} >
      <Display />
      <Container sx={{ gridRow: '2', display:'flex' }}>
        <LeftInput  />
        <RightInput />
      </Container>
    </Box>
  );
}

export default App;
