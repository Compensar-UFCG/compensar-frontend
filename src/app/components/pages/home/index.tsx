import './styles.scss';
import ThemeContainer from '@components/templates/ThemeContainer';

import QuestionList from '@/app/components/organisms/questions';
import Header from '@/app/components/organisms/Header';
import Competences from '@components/organisms/competences/Competences';
import { Container } from '@mui/material';

import { Questions } from '@app/interfaces/question.types';
import { Competences as CompetencesType } from '@app/interfaces/competence.types';

interface HomePageProps {
  competences: CompetencesType;
  questions: Questions;
}

const HomePage = ({ competences, questions }: HomePageProps) => {
  return (
    <ThemeContainer>
      <>
        <Header />
        <main>
          <Container sx={{ margin: '24px 16px' }}>
            <Competences competences={competences} />
          </Container>
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
