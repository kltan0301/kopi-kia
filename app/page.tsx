import { Typography } from "@mui/material";
import DrinkMenu from "./components/DrinkMenu";

export default function Home() {
  return (
    <main>
      <Typography sx={{ marginLeft: 2, textTransform: 'uppercase', textAlign: 'center' }} variant="h4" component="h1">
        Kopi Kia
      </Typography>
      <DrinkMenu />
    </main>
  );
}
