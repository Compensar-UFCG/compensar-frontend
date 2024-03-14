import './styles.scss';

import CreateAccountForm from '@components/pages/create-account/CreateAccountForm';
import { Typography } from '@mui/material';

const CreateUser = () => {
  return (
    <main className="create-user_main">
      <Typography variant="h2" component="h2">
        Crie sua conta
      </Typography>
      <CreateAccountForm/>
    </main>
  );
};

export default CreateUser;
