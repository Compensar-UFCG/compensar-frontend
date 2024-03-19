import './styles.scss';
import { Competences as CompetencesType } from '@app/interfaces/competence.types';
import ThemeContainer from '@/app/components/templates/ThemeContainer';
import { Questions } from '@/app/interfaces/question.types';
import QuestionList from '@/app/components/pages/home';
import Header from '@/app/components/pages/homepage/Header';
import Competences from '@/app/components/organisms/competences/Competences';
import { Container } from '@mui/material';

interface HomeProps {
  competences: CompetencesType;
  questions: Questions;
}

const Home = ({ competences, questions }: HomeProps) => {
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

export async function getServerSideProps() {
  const competences: CompetencesType = await fetch(`${process.env.BASE_API_URL}/api/competences`)
    .then(res => res.json())
    .catch(() => []);

  const questions: Questions =await fetch(`${process.env.BASE_API_URL}/api/questions`)
    .then(res => res.json())
    .catch(() => []);

  return {
    props: {
      competences,
      questions
    },
  };
}

export default Home;
