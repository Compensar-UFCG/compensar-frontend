import { FC } from "react";
import { useRouter } from "next/navigation";

import { Box, Button, Container, Typography } from "@mui/material";

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
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px'
        }}>
          <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
            <Typography variant="h1">Compensar</Typography>
            <Typography variant="subtitle1">Plataforma de questões avaliadas com competências do pensamento computacional</Typography>
          </Box>
          <Button variant="contained" onClick={redirectToLoginPage}>Acesse agora</Button>
        </Box>
      </Container>
    </header>
  )
}

export default Header;