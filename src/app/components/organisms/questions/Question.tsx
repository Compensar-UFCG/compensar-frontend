import { Question as QuestionProps } from "@interfaces/question.types";
import { FC, useState } from "react";

import { Card, CardContent, CardActions } from '@mui/material';

import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShareIcon from '@mui/icons-material/Share';

import ExpandButton from "@components/atoms/ExpandButton";
import QuestionHeader from "./QuestionHeader";
import QuestionMain from "./QuestionMain";
import CompetenceTagList from "./CompetenceTagList";

const Question: FC<QuestionProps> = ({
  title,
  statement,
  font,
  year,
  type,
  image,
  alternatives,
  response,
  competences
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <QuestionHeader
        title={title}
        font={font}
        year={year}
        type={type}
      />
      <Collapse in={!expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">{`${statement.slice(0, 220)}...`}</Typography>
          <CompetenceTagList competences={competences}/>
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
        <IconButton aria-label="add to list">
          <AddCircleIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandButton expanded={expanded} handleExpandClick={handleExpandClick}/>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <QuestionMain
          statement={statement}
          image={image}
          alternatives={alternatives}
          response={response}
        />
      </Collapse>
    </Card>
  )
}

export default Question;