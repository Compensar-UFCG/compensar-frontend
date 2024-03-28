import { Question as QuestionProps } from "@interfaces/question.types";
import { Dispatch, FC, SetStateAction } from "react";

import { CardHeader, Avatar, IconButton, Box } from '@mui/material';

import { FontColor } from "../../../utils/questionUtils";
import ExpandedButton from "@components/atoms/ExpandButton";

import DeleteIcon from '@mui/icons-material/Delete';

interface QuestionHeaderProps extends Omit<QuestionProps, '_id' | 'statement' | 'image' | 'alternatives' | 'response' | 'competences'> {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  removeQuestion: () => void;
}

const QuestionHeader: FC<QuestionHeaderProps> = ({
  title,
  font,
  year,
  type,
  expanded,
  setExpanded,
  removeQuestion
}) => {
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardHeader
      className="card-header_short"
      avatar={
        <Avatar aria-label="recipe" sx={{ bgcolor: FontColor[font]}}>
          {font[0].toUpperCase()}
        </Avatar>
      }
      title={title}
      subheader={`Fonte: ${font} ${year} [${type}]`}
      action={
        <>
          <IconButton aria-label="remove to list" onClick={removeQuestion}>
            <DeleteIcon color="error"/>
          </IconButton>
          <ExpandedButton expanded={expanded} handleExpandClick={handleExpandClick}/>
        </>
      }
    />
  )
}

export default QuestionHeader;