import { FC } from "react";
import HomePage from "@app/components/pages/home";

import { Competences } from "@app/interfaces/competence.types";
import { Questions } from "@app/interfaces/question.types";

interface ViewProps {
  competences: Competences;
  questions: Questions;
}
const View: FC<ViewProps> = ({ competences, questions }) => {
  return <HomePage competences={competences} questions={questions} />
}

export async function getServerSideProps() {
  const competences: Competences = await fetch(`${process.env.BASE_API_URL}/api/competences`)
    .then(res => res.json())
    .catch(() => []);

  const questions: Questions = await fetch(`${process.env.BASE_API_URL}/api/questions`)
    .then(res => res.json())
    .catch(() => []);

  return {
    props: {
      competences,
      questions
    },
  };
}

export default View;
