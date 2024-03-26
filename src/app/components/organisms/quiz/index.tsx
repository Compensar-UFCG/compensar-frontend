import { useHomeSessionContext } from "@contexts/HomeProvider";
import { List, ListItem } from "@mui/material";
import Question from "../../molecules/questions/Question";

const Quiz = () => {
  const { myQuestions } = useHomeSessionContext();
  
  return (
    <List sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'end',
    }}>
      {myQuestions.map((question, index) =>
        <ListItem key={index} alignItems="flex-start">
          <Question question={question}/>
        </ListItem>
      )}
    </List>
  )
}

export default Quiz;