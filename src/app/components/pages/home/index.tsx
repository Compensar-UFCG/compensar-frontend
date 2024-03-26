import './styles.scss';
import ThemeContainer from '@components/templates/ThemeContainer';

import { Container } from '@mui/material';

import { ProtectedProvider } from '@contexts/ProtectedProvider';
import QuestionList from '@components/organisms/questions';
import HeaderHome from '@components/organisms/header-home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Quiz from '@components/organisms/quiz';
import { HomeProvider } from '@contexts/HomeProvider';

const HomePage = () => {
  const queryClient = new QueryClient();

  return (
    <ProtectedProvider>
      <ThemeContainer>
        <HomeProvider>
          <QueryClientProvider client={queryClient}>
            <HeaderHome />
            <main className="main_home-logged">
              <Container sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '16PX'
              }}>
                <Quiz />
                <QuestionList />
              </Container>
            </main>
          </QueryClientProvider>
        </HomeProvider>
      </ThemeContainer>
    </ProtectedProvider>
  );
};

export default HomePage;
