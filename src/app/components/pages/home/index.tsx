import './styles.scss';
import ThemeContainer from '@components/templates/ThemeContainer';

import { Container, Fab } from '@mui/material';

import { ProtectedProvider } from '@contexts/ProtectedProvider';
import QuestionList from '@components/organisms/questions';
import HeaderHome from '@components/organisms/header-home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Quiz from '@components/organisms/quiz';
import { HomeProvider } from '@contexts/HomeProvider';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
const HomePage = () => {
  const queryClient = new QueryClient();
  const [open, setOpen] = useState(false);

  return (
    <ProtectedProvider>
      <ThemeContainer>
        <HomeProvider>
          <QueryClientProvider client={queryClient}>
            <HeaderHome />
            <main className="main_home-logged">
              <Container sx={{
                display: open ? 'grid' : 'block',
                gridTemplateColumns: '1fr 2fr',
                gap: '16px'
              }}>
                {open && <Quiz setOpen={setOpen} />}
                <QuestionList showBtnAdd={open}/>
                {!open && <Fab
                  color="primary"
                  aria-label="add"
                  onClick={() => setOpen(true)}
                  sx={{
                    position: 'fixed',
                    right: '20px',
                    bottom: '20px',
                    zIndex: 1
                  }}
                >
                  <AddIcon />
                </Fab>}
              </Container>
            </main>
          </QueryClientProvider>
        </HomeProvider>
      </ThemeContainer>
    </ProtectedProvider>
  );
};

export default HomePage;
