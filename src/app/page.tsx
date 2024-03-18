'use client'
import { Button, Typography } from "@mui/material";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  const redirectToCreateAccountPage = () => {
    router.push('/create-account');
  }
  const redirectToLoginPage = () => {
    router.push('/login')
  }
  return (
    <main>
      <Typography variant="h1" component="h2">
        Home Page
      </Typography>
      <Button
        variant="contained"
        onClick={redirectToCreateAccountPage}
      >Criar conta</Button>
      <Button
        variant="contained"
        onClick={redirectToLoginPage}
      >Login</Button>
    </main>
  );
}
