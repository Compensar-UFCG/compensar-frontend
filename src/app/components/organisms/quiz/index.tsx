import { useHomeSessionContext } from "@contexts/HomeProvider";
import { Box, IconButton, Container, List, ListItem, Typography } from "@mui/material";
import Question from "@components/molecules/question-short/QuestionShort";

import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';

import { grey } from "@mui/material/colors";
import { Dispatch, FC, SetStateAction } from "react";
import { Questions } from "@interfaces/question.types";

async function fetchQuestions(questions: Questions) {
  fetch('/api/pdf', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(questions)
  }) // Substitua '/api/gerar-pdf' pelo caminho correto para a sua rota
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao gerar o PDF');
      }
      return response.blob(); // Assume que o PDF é retornado como um blob
    })
    .then(blob => {
      // Cria um link temporário para baixar o blob como um arquivo PDF
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'documento.pdf'; // Nome do arquivo PDF a ser baixado
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error('Erro ao baixar o PDF:', error);
    });
}
const QuizList = () => {
  const { myQuestions } = useHomeSessionContext();
  return (
    <List sx={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      {myQuestions.map((question, index) =>
        <ListItem key={index} alignItems="flex-start">
          <Question question={question}/>
        </ListItem>
      )}
    </List>
  )
}
interface QuizHeaderProps {
  setOpen: Dispatch<SetStateAction<boolean>>
}
const QuizHeader: FC<QuizHeaderProps> = ({ setOpen }) => {
  const { myQuestions } = useHomeSessionContext();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6">Questionário</Typography>
      <Box>
        <IconButton onClick={() => fetchQuestions(myQuestions)}>
          <DownloadIcon/>
        </IconButton>
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon/>
        </IconButton>
      </Box>
    </Box>
  )
}

const Quiz: FC<QuizHeaderProps> = ({ setOpen }) => {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      marginTop: '8px',
      borderRadius: '10px',
      background: grey[100],
      padding: '16px !important',
      height: 'fit-content'
    }}>
      <QuizHeader setOpen={setOpen}/>
      <QuizList/>
    </Container>
  )
}

export default Quiz;