import { Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <main>
      <Typography sx={{ marginLeft: 2 }} variant="h6" component="h1">
        Apollo Music Share
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </main>
  );
}
