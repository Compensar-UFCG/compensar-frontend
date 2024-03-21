import { FC } from "react";
import { useRouter } from "next/navigation";

import { Box, Button, Container, Typography } from "@mui/material";
import NavBar from "@components/organisms/NavBar";

const Header: FC = () => {
  const router = useRouter();

  const redirectToLoginPage = () => {
    router.push('/login');
  }
  return (
    <header>
      <Container sx={{
        padding: '12px 16px 42px',
      }}>
        <NavBar/>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Typography variant="subtitle1" gutterBottom>The making of a Marvel prototype</Typography>
          <Typography variant="h1" gutterBottom>Compensar</Typography>
          <Button variant="contained" onClick={redirectToLoginPage}>Acesse agora</Button>
        </Box>
      </Container>
    </header>
  )
}

export default Header;