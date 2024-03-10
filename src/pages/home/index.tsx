import './styles.scss';
import Competences from "./components/competences/Competences";

const Home = ({ competences=[] }) => {
  return (
    <section className='section-competences'>
      <h2>Competências</h2>
      <Competences competences={competences} />
    </section>
  );
};

export async function getServerSideProps() {
  const response = await fetch('http://localhost:8080/api/competences');
  const competences = await response.json();

  return {
    props: {
      competences,
    },
  };
}

export default Home;
