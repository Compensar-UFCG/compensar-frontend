import { Question as QuestionInterface } from "@interfaces/question.types";
import { FC, useEffect, useState } from "react";

import { Card, CardContent, CardActions } from '@mui/material';

import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import ExpandButton from "@components/atoms/ExpandButton";
import CompetenceTagList from "@components/atoms/competence-tags/CompetenceTagList";

import QuestionHeader from "./QuestionHeader";
import QuestionMain from "./QuestionMain";

import { useHomeSessionContext } from "@contexts/HomeProvider";

interface QuestionProps {
  question: QuestionInterface;
  showBtnAdd: boolean
}

const Question: FC<QuestionProps> = ({ question, showBtnAdd }) => {
  const {
    _id,
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
  const { saveMyQuestions, containQuestion, myQuestions } = useHomeSessionContext();
  const [expanded, setExpanded] = useState(false);
  const [hasAdd, setHasAdd] = useState(containQuestion(_id));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addQuestionInListAndUpdateBtn = () => {
    saveMyQuestions(question);
    setHasAdd(true);
  }

  useEffect(() => {
    setHasAdd(containQuestion(_id));
  }, [myQuestions, _id, containQuestion]);

  return (
    <Card>
      <QuestionHeader
        title={title}
        font={font}
        year={year}
        type={type}
      />
      <Collapse in={!expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">{`${statement.slice(0, 220)}...`}</Typography>
          <CompetenceTagList competences={competences}/>
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
        {hasAdd ? (
            <CheckCircleIcon color="success" sx={{ padding: '8px'}}/>
          ) : showBtnAdd && (
            <IconButton aria-label="add to list" onClick={addQuestionInListAndUpdateBtn}>
              <AddCircleIcon/>
            </IconButton>
          )}
        <ExpandButton expanded={expanded} handleExpandClick={handleExpandClick}/>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <QuestionMain
          statement={statement}
          image={image}
          alternatives={alternatives}
          response={response}
        />
      </Collapse>
    </Card>
  )
}

export default Question;