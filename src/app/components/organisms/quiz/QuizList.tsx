import QuestionShort from "@components/molecules/question-short/QuestionShort";
import { useHomeSessionContext } from "@contexts/HomeProvider";
import { List, ListItem } from "@mui/material";

const QuizList = () => {
  const { myQuestions } = useHomeSessionContext();
  return (
    <List sx={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      {myQuestions.map((question, index) =>
        <ListItem key={index} alignItems="flex-start">
          <QuestionShort question={question}/>
        </ListItem>
      )}
    </List>
  )
}

export default QuizList;