import './styles.scss';
import ThemeContainer from '@/app/components/templates/ThemeContainer';
import { useRouter } from 'next/router';

import CreateAccountForm from '@components/pages/create-account/CreateAccountForm';
import { Typography, Button } from '@mui/material';

const CreateUser = () => {
  const router = useRouter();

  const redirectToLoginPage = () => {
    router.push('/login')
  }
  return (
    <ThemeContainer>
      <main>
        <section className="create-account_form">
          <div className="create-account_header-section">
            <Typography variant="h2" component="h2" align="center">
              Crie sua conta
            </Typography>
            <Typography variant="subtitle2" component="h2" align="center">
              Cadastre-se para ter acesso aos nossos conteúdos.
            </Typography>
          </div>
          <CreateAccountForm/>
        </section>
        <section className="create-account_login">
          <Typography variant="subtitle1" component="h2" align="center">
            Tem uma conta?
          </Typography>
          <Button
            variant="text"
            onClick={redirectToLoginPage}
          >Conecte-se</Button>
        </section>
      </main>
    </ThemeContainer>
  );
};

export default CreateUser;
