import { FC, useState } from "react";

import { Competence as CompetenceItem } from "@app/interfaces/competence.types";
import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";
import getCompetenceColor from "@app/utils/competencesColor";

interface CompetenceProps  {
  competence: CompetenceItem
}

const Competence: FC<CompetenceProps>  = ({ competence }) => {
  const { title, description } = competence;
  const [expanded, setExpanded] = useState(false);
  const color = getCompetenceColor(title);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ width: '360px', height: '280px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: color }} aria-label="recipe">
            {title[0]}
          </Avatar>
        }
        title={title}
        subheader="Comepetência do pensamento computacional"
      />
      <CardContent>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  )
}

export default Competence;