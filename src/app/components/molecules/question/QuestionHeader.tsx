import { Question as QuestionProps } from "@interfaces/question.types";
import { FC } from "react";

import { CardHeader, Avatar } from '@mui/material';

import { FontColor } from "./utils";

const QuestionHeader: FC<Omit<QuestionProps, '_id' | 'statement' | 'image' | 'alternatives' | 'response' | 'competences'>> = ({
  title,
  font,
  year,
  type
}) => {
  return (
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" sx={{ bgcolor: FontColor[font]}}>
          {font[0].toUpperCase()}
        </Avatar>
      }
      title={title}
      subheader={`Fonte: ${font} ${year} [${type}]`}
    />
  )
}

export default QuestionHeader;