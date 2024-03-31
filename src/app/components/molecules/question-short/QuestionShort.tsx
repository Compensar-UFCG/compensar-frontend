import { Question as QuestionInterface } from "@interfaces/question.types";
import { FC, useState } from "react";

import { Card } from '@mui/material';

import Collapse from '@mui/material/Collapse';

import QuestionHeader from "./QuestionHeader";
import QuestionMain from "./QuestionMain";
import { useHomeSessionContext } from "@contexts/HomeProvider";

interface QuestionShortProps {
  question: QuestionInterface
}

const QuestionShort: FC<QuestionShortProps> = ({ question }) => {
  const {
    title,
    statement,
    font,
    year,
    type,
    image,
    alternatives,
    response,
    competences
  } = question;
  const { removeMyQuestions } = useHomeSessionContext();

  const [expanded, setExpanded] = useState(false);

  const removeQuestion = () => {
    removeMyQuestions(question);
  }
  return (
    <Card>
      <QuestionHeader
        title={title}
        font={font}
        year={year}
        type={type}
        expanded={expanded}
        setExpanded={setExpanded}
        removeQuestion={removeQuestion}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <QuestionMain
          statement={statement}
          image={image}
          alternatives={alternatives}
          response={response}
          competences={competences}
        />
      </Collapse>
    </Card>
  )
}

export default QuestionShort;