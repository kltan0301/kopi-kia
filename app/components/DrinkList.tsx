import { aggregator } from '../utils/aggregator';
import { Drink } from "./AddDrink";
import { Key } from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  fontSize: 'medium',
  textAlign: 'left',
  color: theme.palette.text.secondary,
  flexGrow: 1,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const DrinkList = ({ drinkList, onDelete }: { drinkList: Drink[], onDelete: (index: number) => void }) => {
  return <Grid container spacing={0.5} padding={1} sx={{ fontSize: 'large' }} mt={2}>
    {Object.entries(aggregator(drinkList)).map(([drinkString, count]: [string, number], index: Key | null | undefined) => (
        <>
          <Grid size={7}>
            <Item>{drinkString}</Item>
          </Grid>
          <Grid size={3}>
            <Item>{count}</Item>
          </Grid>
          <Grid size={2}>
            <Button onClick={() => { onDelete(index) }}><FontAwesomeIcon fontSize="medium" color="#495057" icon={faTrashCan}/></Button>
            {/* <Box flex={1} display="flex" justifyContent="center"> */}
              {/* <Button onClick={() => { console.log('edit') }}><FontAwesomeIcon icon={faPencil}/></Button> */}

            {/* </Box> */}
          </Grid>
        </>
      ))}
  </Grid>
}

export default DrinkList;
