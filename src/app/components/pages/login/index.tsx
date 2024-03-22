import './styles.scss';

import { FC } from "react";
import ThemeContainer from "@components/templates/ThemeContainer";
import { Button, Container, Typography } from "@mui/material";

import { useRouter } from "next/router";
import LoginForm from "../../organisms/login-form/LoginForm";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProtectedProvider } from '@contexts/ProtectedProvider';

const LoginPage: FC = () => {
  const queryClient = new QueryClient()
  const router = useRouter();

  const redirectToCreateAccountPage = () => {
    router.push('/create-account');
  }

  return (
    <ProtectedProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeContainer>
        <main className="main_login">
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              width: '60vmax'
            }}
          >
            <section className="login_form">
              <div className="login_header-section">
                <Typography variant="h2" component="h2" align="center">
                  Acesse sua conta
                </Typography>
                <Typography variant="subtitle2" component="h2" align="center">
                  Acesse sua conta e conheça os nossos conteúdos.
                </Typography>
              </div>
            </section>
            <LoginForm/>
            <section className="login_create-account">
              <Typography variant="subtitle1" component="h2" align="center">
                Ainda não tem conta?
              </Typography>
              <Button
                variant="text"
                onClick={redirectToCreateAccountPage}
              >Crie sua conta</Button>
            </section>
          </Container>
        </main>
      </ThemeContainer>
    </QueryClientProvider>
    </ProtectedProvider>
  )
}

export default LoginPage;