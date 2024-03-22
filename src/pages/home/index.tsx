import { FC } from "react";
import HomePage from "@app/components/pages/home";

import { Competences } from "@app/interfaces/competence.types";
import { Questions } from "@app/interfaces/question.types";

interface ViewProps {
  questions: Questions;
}
const View: FC<ViewProps> = ({ questions }) => {
  return <HomePage questions={questions} />
}

export async function getServerSideProps() {
  const questions: Questions = await fetch(`${process.env.BASE_API_URL}/api/questions`)
    .then(res => res.json())
    .catch(() => []);

  return {
    props: {
      questions
    },
  };
}

export default View;
