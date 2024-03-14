import CreateUserForm from '@/app/components/pages/create-account/CreateUserForm';
import './styles.scss';
import { Typography } from '@mui/material';

const CreateUser = () => {
  return (
    <main className="create-user_main">
      <Typography variant="h2" component="h2">
        Crie sua conta
      </Typography>
      <CreateUserForm/>
    </main>
  );
};

export default CreateUser;
