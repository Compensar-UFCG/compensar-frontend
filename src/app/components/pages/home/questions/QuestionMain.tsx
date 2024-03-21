import { Question as QuestionProps } from "@/app/interfaces/question.types";
import { FC } from "react";

import { CardContent, CardMedia } from '@mui/material';

import Typography from '@mui/material/Typography';

import { alphabet } from "./utils";

const QuestionMain: FC<Omit<QuestionProps, 'id' | 'title' | 'font' | 'year' | 'type' | 'competences'>> = ({
  statement,
  image,
  alternatives,
  response
}) => {
  console.log(image);
  
  return (
    <CardContent>
      <Typography>Problema</Typography>
      <Typography variant="body2" color="text.secondary" paragraph>{statement}</Typography>
      {image && (<CardMedia
        component="img"
        height="300"
        image={image}
        alt="question image"
      />)}
      {alternatives && (
        <div>
          <Typography>Alternativas</Typography>
          {alternatives?.map((alternative, index) => <Typography key={index} variant="body2" color="text.secondary" paragraph>{alphabet[index] + alternative}</Typography>)}
        </div>
      )}
      <Typography>Resposta</Typography>
      <Typography variant="body2" color="text.secondary" paragraph>{response}</Typography>
    </CardContent>
  )
}

export default QuestionMain;