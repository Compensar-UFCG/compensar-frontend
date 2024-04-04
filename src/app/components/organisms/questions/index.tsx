import { FC } from "react";

import { Backdrop, CircularProgress, Container, List, ListItem, Skeleton } from "@mui/material";
import Question from "@components/molecules/question/Question";

import useQueryQuestions from "@hooks/useQueryQuestions";

interface QuestionListProps {
  showBtnAdd: boolean
}
const QuestionList: FC<QuestionListProps> = ({ showBtnAdd }) => {
  const { questions, isLoading } = useQueryQuestions();

  if(isLoading) return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
      >
      <CircularProgress color="inherit" />
    </Backdrop>
  )

  return (
    <Container sx={{
      overflowY: 'scroll',
      height: '84vh'
    }}>
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
    </Container>
  )
}

export default QuestionList;