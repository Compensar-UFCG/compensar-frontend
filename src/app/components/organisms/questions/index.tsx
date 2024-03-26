import { FC } from "react";

import { List, ListItem, Skeleton } from "@mui/material";
import Question from "./Question";

import useQueryQuestions from "@hooks/useQueryQuestions";

const QuestionList: FC = () => {
  const { questions, isLoading } = useQueryQuestions();

  if(isLoading) return <Skeleton variant="rectangular" sx={{ height: '90vh', margin: '16px 0' }} />

  return (
    <List sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'end',
    }}>
      {questions.map((question, index) =>
        <ListItem key={index} alignItems="flex-start">
          <Question question={question}/>
        </ListItem>
      )}
    </List>
  )
}

export default QuestionList;