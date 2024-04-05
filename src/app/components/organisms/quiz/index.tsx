import { Container } from "@mui/material";

import { grey } from "@mui/material/colors";
import { Dispatch, FC, SetStateAction } from "react";
import QuizHeader from "./QuizHeader";
import QuizList from "./QuizList";
interface QuizProps {
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Quiz: FC<QuizProps> = ({ setOpen }) => {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      marginTop: '8px',
      borderRadius: '10px',
      background: grey[100],
      padding: '16px !important',
      height: '84vh',
      overflowY: 'scroll'
    }}>
      <QuizHeader setOpen={setOpen}/>
      <QuizList/>
    </Container>
  )
}

export default Quiz;