import DrinkMenu from "./components/DrinkMenu";
import Stack from '@mui/material/Stack';
import Logo from "./components/Logo";

export default function Home() {
  return (
    <main>
      <Stack sx={{ justifyContent: 'center', alignItems: 'center', padding: '15px', backgroundColor: '#2A3694' }}>
        <Logo />
      </Stack>
      <DrinkMenu />
    </main>
  );
}
