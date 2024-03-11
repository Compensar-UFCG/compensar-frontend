import './styles.scss';
import Competences from "@components/pages/competences/Competences";
import { Competences as CompetencesType } from '@app/interfaces/competence.types';

interface HomeProps {
  competences: CompetencesType;
  isEmpty: boolean
}

const Home = ({ competences, isEmpty }: HomeProps) => {
  return (
    <>
      {!isEmpty && (
        <section className='section-competences'>
          <h2>Competências</h2>
          <Competences competences={competences} />
        </section>
      )}
    </>
  );
};

export async function getServerSideProps() {
  const competences: CompetencesType =
    await fetch('http://localhost:8080/api/competences')
    .then(res => res.json())
    .catch(() => []);

  return {
    props: {
      isEmpty: competences?.length === 0,
      competences,
    },
  };
}

export default Home;
