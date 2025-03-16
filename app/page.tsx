import DrinkMenu from "./components/DrinkMenu";
import Stack from '@mui/material/Stack';
import Logo from "./components/Logo";

export default function Home() {
  return (
    <main>
      <Stack sx={{ justifyContent: 'center', alignItems: 'center', padding: '12px', backgroundColor: '#EEF1FE' }}>
        <Logo />
      </Stack>
      <DrinkMenu />
    </main>
  );
}
