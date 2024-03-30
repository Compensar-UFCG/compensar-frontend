import { FC } from "react";

import { List, ListItem, Skeleton } from "@mui/material";
import Question from "@components/molecules/question/Question";

import useQueryQuestions from "@hooks/useQueryQuestions";

interface QuestionListProps {
  showBtnAdd: boolean
}
const QuestionList: FC<QuestionListProps> = ({ showBtnAdd }) => {
  const { questions, isLoading } = useQueryQuestions();

  if(isLoading) return <Skeleton variant="rectangular" sx={{ height: '90vh', margin: '16px 0' }} />

  return (
    <List sx={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      {questions.map((question, index) =>
        <ListItem key={index} alignItems="flex-start">
          <Question question={question} showBtnAdd={showBtnAdd}/>
        </ListItem>
      )}
    </List>
  )
}

export default QuestionList;