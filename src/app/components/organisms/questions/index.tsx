import { Questions } from "@/app/interfaces/question.types";
import { List, ListItem } from "@mui/material";
import { FC } from "react";
import Question from "./Question";

interface QuestionListProps {
  questions: Questions
}

const QuestionList: FC<QuestionListProps> = ({ questions }) => {
  return (
    <List sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'end',
    }}>
      {questions.map((question, index) =>
        <ListItem key={index} alignItems="flex-start">
          <Question {...question}/>
        </ListItem>
      )}
    </List>
  )
}

export default QuestionList;