import './App.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Map from './app/map/map';
import { Counter } from './app/counter/counter';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {
  return (
  <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item>xs=8</Item>
     </Grid>
    <Grid item xs={4}>
      <Item>xs=4</Item>
    </Grid>
    <Grid item xs={4}>
      <Item>
        <Counter />
      </Item>
    </Grid>
    <Grid item xs={8}>
      <Item>
        <Map />
      </Item>
    </Grid>
</Grid> 
  );
}

export default App;
