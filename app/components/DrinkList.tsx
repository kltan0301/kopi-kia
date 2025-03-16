import { aggregator } from '../utils/aggregator';
import { Drink } from "./AddDrink";
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@mui/material';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  fontSize: 'large',
  textAlign: 'left',
  alignItems: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

type DrinkListProps = {
  drinkList: Drink[],
  onListAdd: (drink: Drink) => void,
  onListRemove: (drink: Drink) => void
};

const DrinkList = ({ drinkList, onListAdd, onListRemove }: DrinkListProps) => {
  return <>
    <Typography variant="h6" component="h1" sx={{ color: '#6c757d', mt: 3, pl: 2 }}>Drink Orders</Typography>
    <Grid container spacing={0.5} padding={1} sx={{ fontSize: 'large' }} mt={2}>
    {Object.entries(aggregator(drinkList)).map(([drinkString, {count, drink}]: [string, { count: number, drink: Drink}]) => (
        <>
          <Grid size={8}>
            <Item>{drinkString}</Item>
          </Grid>
          <Grid size={4}>
            <Item sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <FontAwesomeIcon onClick={() => { onListRemove(drink) }} fontSize="medium" color="#adb5bd" icon={faMinus}/>
              {count}
              <FontAwesomeIcon onClick={() => { onListAdd(drink) }}  fontSize="medium" color="#adb5bd" icon={faAdd}/>
            </Item>
          </Grid>
        </>
      ))}
  </Grid>
  </>
}

export default DrinkList;
