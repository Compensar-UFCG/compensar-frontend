import './styles.scss';
import ThemeContainer from '@components/templates/ThemeContainer';

import QuestionList from '@/app/components/organisms/questions';
import Header from '@/app/components/organisms/Header';
import { Container } from '@mui/material';

import { Questions } from '@app/interfaces/question.types';

interface HomePageProps {
  questions: Questions;
}

const HomePage = ({ questions }: HomePageProps) => {
  return (
    <ThemeContainer>
      <>
        <Header />
        <main>
          <Container sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '16PX'
          }}>
            <>My list</>
            <QuestionList questions={questions}/>
          </Container>
        </main>
      </>
    </ThemeContainer>
  );
};

export default HomePage;
