import { aggregator } from '../utils/aggregator';
import { Drink } from "./AddDrink";
import { Key } from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faAdd, faMinus } from '@fortawesome/free-solid-svg-icons';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  fontSize: 'medium',
  textAlign: 'left',
  alignItems: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const DrinkList = ({ drinkList, onDelete }: { drinkList: Drink[], onDelete: (index: number) => void }) => {
  return <Grid container spacing={0.5} padding={1} sx={{ fontSize: 'large' }} mt={2}>
    {Object.entries(aggregator(drinkList)).map(([drinkString, count]: [string, number], index: number) => (
        <>
          <Grid size={7}>
            <Item>{drinkString}</Item>
          </Grid>
          <Grid size={3}>
            <Item sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <FontAwesomeIcon fontSize="medium" color="#495057" icon={faMinus}/>
              {count}
              <FontAwesomeIcon fontSize="medium" color="#495057" icon={faAdd}/>
            </Item>
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
