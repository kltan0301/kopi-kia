import { aggregator } from '../utils/aggregator';
import { Drink } from "./AddDrink";
import { Key } from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const DrinkList = ({ drinkList }: { drinkList: Drink[] }) => {
  return <Grid container spacing={0.5}>
    {Object.entries(aggregator(drinkList)).map(([drinkString, count]: [string, number], index: Key | null | undefined) => (
        <>
          <Grid size={7}>
            <Item>{drinkString}</Item>
          </Grid>
          <Grid size={3}>
            <Item>{count}</Item>
          </Grid>
          <Grid size={2}>
            <Item>X</Item>
          </Grid>
        </>
      ))}
  </Grid>
}

export default DrinkList;
