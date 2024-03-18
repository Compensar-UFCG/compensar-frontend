import { render, screen } from '@testing-library/react';
import CreateAccountForm from '../CreateAccountForm';
import userEvent from '@testing-library/user-event'
import { accountErrorMessages } from '../utils/accountValidationSchema';

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  },
}));
describe('Create Account Form - account validation schema', () => {
  it('renders inputs and button', () => {
    render(<CreateAccountForm/>);

    const inputEmail = screen.getByLabelText('Seu e-mail');
    const inputUsername = screen.getByLabelText('Seu nome de usuário');
    const inputPassword = screen.getByLabelText('Sua senha');
    const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });

    expect(inputEmail).toBeInTheDocument();
    expect(inputUsername).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(btnSubmit).toBeInTheDocument();
  });

  it('renders inputs error messages when try submit form with empty values', async () => {
    const user = userEvent.setup()

    render(<CreateAccountForm/>);

    const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });

    await user.click(btnSubmit);

    const emailEmptyErrorMessage = await screen.findByText(accountErrorMessages.emailEmpty);
    const usernameEmptyErrorMessage = await screen.findByText(accountErrorMessages.usernameEmpty);
    const passwordEmptyErrorMessage = await screen.findByText(accountErrorMessages.passwordEmpty);

    expect(emailEmptyErrorMessage).toBeInTheDocument();
    expect(usernameEmptyErrorMessage).toBeInTheDocument();
    expect(passwordEmptyErrorMessage).toBeInTheDocument();
  });

  it('renders inputs error messages when try submit form with whitespace value in inputs', async () => {
    const user = userEvent.setup()

    render(<CreateAccountForm/>);

    const inputEmail = screen.getByLabelText('Seu e-mail');
    const inputUsername = screen.getByLabelText('Seu nome de usuário');
    const inputPassword = screen.getByLabelText('Sua senha');
    const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });

    await user.type(inputEmail, ' ');
    await user.type(inputUsername, ' ');
    await user.type(inputPassword, ' ');
    await user.click(btnSubmit);

    const emailEmptyErrorMessage = await screen.findByText(accountErrorMessages.emailEmpty);
    const usernameEmptyErrorMessage = await screen.findByText(accountErrorMessages.usernameEmpty);
    const passwordEmptyErrorMessage = await screen.findByText(accountErrorMessages.passwordEmpty);

    expect(emailEmptyErrorMessage).toBeInTheDocument();
    expect(usernameEmptyErrorMessage).toBeInTheDocument();
    expect(passwordEmptyErrorMessage).toBeInTheDocument();
  });

  describe('email', () => {
    it('renders inputs error messages when try submit form with invalid email', async () => {
      const user = userEvent.setup()
  
      render(<CreateAccountForm/>);
  
      const inputEmail = screen.getByLabelText('Seu e-mail');
      const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });
  
      await user.type(inputEmail, 'invalid.email@test.');
      await user.click(btnSubmit);
  
      const emailInvalidErrorMessage = await screen.findByText(accountErrorMessages.emailInvalid);
  
      expect(emailInvalidErrorMessage).toBeInTheDocument();
    });
  });

  describe('username', () => {
    it('renders inputs error messages when try submit form with username without min length', async () => {
      const user = userEvent.setup()
  
      render(<CreateAccountForm/>);
  
      const inputUsername = screen.getByLabelText('Seu nome de usuário');
      const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });
  
      await user.type(inputUsername, 'us');
      await user.click(btnSubmit);
  
      const usernameMinErrorMessage = await screen.findByText(accountErrorMessages.usernameMin);
  
      expect(usernameMinErrorMessage).toBeInTheDocument();
    });
  
    it('renders add username with min characters without error message', async () => {
      const user = userEvent.setup()
  
      render(<CreateAccountForm/>);
  
      const inputUsername = screen.getByLabelText('Seu nome de usuário');
      const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });
  
      await user.type(inputUsername, '123');
      await user.click(btnSubmit);
  
      expect(inputUsername).toHaveValue('123')
    });

    it('renders inputs error messages when try submit form with username lentgh more big then max accept', async () => {
      const user = userEvent.setup()
  
      render(<CreateAccountForm/>);
  
      const inputUsername = screen.getByLabelText('Seu nome de usuário');
      const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });
  
      await user.type(inputUsername, '123456789.123456');
      await user.click(btnSubmit);
  
      const usernameMaxErrorMessage = await screen.findByText(accountErrorMessages.usernameMax);
  
      expect(usernameMaxErrorMessage).toBeInTheDocument();
    });
  
    it('renders add username with max characters without error message', async () => {
      const user = userEvent.setup()
  
      render(<CreateAccountForm/>);
  
      const inputUsername = screen.getByLabelText('Seu nome de usuário');
      const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });
  
      await user.type(inputUsername, '123456789.12345');
      await user.click(btnSubmit);
  
      expect(inputUsername).toHaveValue('123456789.12345')
    });

    it('renders input error messages when try submit form with username with whitespace between the text', async () => {
      const user = userEvent.setup()
  
      render(<CreateAccountForm/>);
  
      const inputUsername = screen.getByLabelText('Seu nome de usuário');
      const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });
  
      await user.type(inputUsername, 'user name');
      await user.click(btnSubmit);
  
      const usernameMacthesErrorMessage = await screen.findByText(accountErrorMessages.usernameMacthes);
  
      expect(usernameMacthesErrorMessage).toBeInTheDocument();
    });
  });

  describe('password', () => {
    it('renders inputs error messages when try submit form with password without min length', async () => {
      const user = userEvent.setup()
  
      render(<CreateAccountForm/>);
  
      const inputPassword = screen.getByLabelText('Sua senha');
      const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });
  
      await user.type(inputPassword, '1234567');
      await user.click(btnSubmit);
  
      const passwordMinErrorMessage = await screen.findByText(accountErrorMessages.passwordMin);
  
      expect(passwordMinErrorMessage).toBeInTheDocument();
    });
  
    it('renders add password with min characters without error message', async () => {
      const user = userEvent.setup()
  
      render(<CreateAccountForm/>);
  
      const inputPassword = screen.getByLabelText('Sua senha');
      const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });
  
      await user.type(inputPassword, '@Aa12345');
      await user.click(btnSubmit);
  
      expect(inputPassword).toHaveValue('@Aa12345')
    });

    it('renders inputs error messages when try submit form with password lentgh more big then max accept', async () => {
      const user = userEvent.setup()
  
      render(<CreateAccountForm/>);
  
      const inputPassword = screen.getByLabelText('Sua senha');
      const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });
  
      await user.type(inputPassword, '123456789.123');
      await user.click(btnSubmit);
  
      const passwordMaxErrorMessage = await screen.findByText(accountErrorMessages.passwordMax);
  
      expect(passwordMaxErrorMessage).toBeInTheDocument();
    });
  
    it('renders add password with max characters without error message', async () => {
      const user = userEvent.setup()
  
      render(<CreateAccountForm/>);
  
      const inputPassword = screen.getByLabelText('Sua senha');
      const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });
  
      await user.type(inputPassword, '123456789@Aa');
      await user.click(btnSubmit);
  
      expect(inputPassword).toHaveValue('123456789@Aa')
    });

    it('renders input error messages when try submit form with password without number', async () => {
      const user = userEvent.setup()
  
      render(<CreateAccountForm/>);
  
      const inputPassword = screen.getByLabelText('Sua senha');
      const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });
  
      await user.type(inputPassword, '@Abcdefg');
      await user.click(btnSubmit);
  
      const passwordMacthesErrorMessage = await screen.findByText(accountErrorMessages.passwordMacthes);
  
      expect(passwordMacthesErrorMessage).toBeInTheDocument();
    });

    it('renders input error messages when try submit form with password without capital letters', async () => {
      const user = userEvent.setup()
  
      render(<CreateAccountForm/>);
  
      const inputPassword = screen.getByLabelText('Sua senha');
      const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });
  
      await user.type(inputPassword, '@abcde123');
      await user.click(btnSubmit);
  
      const passwordMacthesErrorMessage = await screen.findByText(accountErrorMessages.passwordMacthes);
  
      expect(passwordMacthesErrorMessage).toBeInTheDocument();
    });
    it('renders input error messages when try submit form with password without small letters', async () => {
      const user = userEvent.setup()
  
      render(<CreateAccountForm/>);
  
      const inputPassword = screen.getByLabelText('Sua senha');
      const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });
  
      await user.type(inputPassword, '@ABCDE123');
      await user.click(btnSubmit);
  
      const passwordMacthesErrorMessage = await screen.findByText(accountErrorMessages.passwordMacthes);
  
      expect(passwordMacthesErrorMessage).toBeInTheDocument();
    });

    it('renders input error messages when try submit form with password without special characters', async () => {
      const user = userEvent.setup()
  
      render(<CreateAccountForm/>);
  
      const inputPassword = screen.getByLabelText('Sua senha');
      const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });
  
      await user.type(inputPassword, 'Aabcde123');
      await user.click(btnSubmit);
  
      const passwordMacthesErrorMessage = await screen.findByText(accountErrorMessages.passwordMacthes);
  
      expect(passwordMacthesErrorMessage).toBeInTheDocument();
    });
  });

});

describe('Create Account - behaviors', () => {
  it('renders show password', async () => {
    const user = userEvent.setup()

    render(<CreateAccountForm/>);

    const inputPassword = screen.getByLabelText('Sua senha');
    const passwordIcon = screen.getByLabelText('toggle password visibility');

    await user.type(inputPassword, '@Aa12345');

    expect(inputPassword).toHaveProperty('type', 'password');

    await user.click(passwordIcon);

    expect(inputPassword).toHaveProperty('type', 'text');
  });
});

jest.spyOn(global, 'setTimeout');

describe('Create Account - API', () => {

  it('renders submit a form with success', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ ok: true }),
    ) as jest.Mock;
    const user = userEvent.setup();

    render(<CreateAccountForm/>);

    const inputEmail = screen.getByLabelText('Seu e-mail');
    const inputUsername = screen.getByLabelText('Seu nome de usuário');
    const inputPassword = screen.getByLabelText('Sua senha');
    const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });

    await user.type(inputEmail, 'valid-email@test.com');
    await user.type(inputUsername, 'username.test');
    await user.type(inputPassword, '@Aa12345');

    expect(inputEmail).toHaveValue('valid-email@test.com');
    expect(inputUsername).toHaveValue('username.test');
    expect(inputPassword).toHaveValue('@Aa12345');

    await user.click(btnSubmit);
    expect(btnSubmit).toBeDisabled();

    const successSnackbarMessage = await screen.findByText('Sua conta foi criada com sucesso');
    expect(successSnackbarMessage).toBeInTheDocument();
    expect(setTimeout).toHaveBeenCalled();
  });

  it('renders submit a form with 404', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ ok: false }),
    ) as jest.Mock;
    const user = userEvent.setup();

    render(<CreateAccountForm/>);

    const inputEmail = screen.getByLabelText('Seu e-mail');
    const inputUsername = screen.getByLabelText('Seu nome de usuário');
    const inputPassword = screen.getByLabelText('Sua senha');
    const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });

    await user.type(inputEmail, 'valid-email@test.com');
    await user.type(inputUsername, 'username.test');
    await user.type(inputPassword, '@Aa12345');

    expect(inputEmail).toHaveValue('valid-email@test.com');
    expect(inputUsername).toHaveValue('username.test');
    expect(inputPassword).toHaveValue('@Aa12345');

    await user.click(btnSubmit);
    expect(btnSubmit).toBeDisabled();

    const errorSnackbarMessage = await screen.findByText('Ocorreu um erro ao criar conta');
    expect(errorSnackbarMessage).toBeInTheDocument();
    expect(setTimeout).toHaveBeenCalled();
  });

  it('renders submit a form with API error', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(),
    ) as jest.Mock;
    const user = userEvent.setup();

    render(<CreateAccountForm/>);

    const inputEmail = screen.getByLabelText('Seu e-mail');
    const inputUsername = screen.getByLabelText('Seu nome de usuário');
    const inputPassword = screen.getByLabelText('Sua senha');
    const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });

    await user.type(inputEmail, 'valid-email@test.com');
    await user.type(inputUsername, 'username.test');
    await user.type(inputPassword, '@Aa12345');

    expect(inputEmail).toHaveValue('valid-email@test.com');
    expect(inputUsername).toHaveValue('username.test');
    expect(inputPassword).toHaveValue('@Aa12345');

    await user.click(btnSubmit);
    expect(btnSubmit).toBeDisabled();

    const errorSnackbarMessage = await screen.findByText('Ocorreu um erro ao criar conta');
    expect(errorSnackbarMessage).toBeInTheDocument();
    expect(setTimeout).toHaveBeenCalled();
  });

  it('renders submit a form with username or email used by another account', async () => {
    global.fetch = jest.fn(() =>
    Promise.resolve({ ok: false, status: 409 }),
  ) as jest.Mock;
    const user = userEvent.setup();

    render(<CreateAccountForm/>);

    const inputEmail = screen.getByLabelText('Seu e-mail');
    const inputUsername = screen.getByLabelText('Seu nome de usuário');
    const inputPassword = screen.getByLabelText('Sua senha');
    const btnSubmit = screen.getByRole('button', { name: 'Criar conta' });

    await user.type(inputEmail, 'valid-email@test.com');
    await user.type(inputUsername, 'username.test');
    await user.type(inputPassword, '@Aa12345');

    expect(inputEmail).toHaveValue('valid-email@test.com');
    expect(inputUsername).toHaveValue('username.test');
    expect(inputPassword).toHaveValue('@Aa12345');

    await user.click(btnSubmit);
    expect(btnSubmit).toBeDisabled();

    const errorSnackbarMessage = await screen.findByText('O nome de usuário ou email já estão em uso');
    expect(errorSnackbarMessage).toBeInTheDocument();
    expect(setTimeout).toHaveBeenCalled();
  });
});
