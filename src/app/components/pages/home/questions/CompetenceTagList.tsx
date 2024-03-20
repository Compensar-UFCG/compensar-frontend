import { FC } from "react";
import CompetenceTag from "./CompetenceTag";
import LightbulbIcon from '@mui/icons-material/Lightbulb';

import { Competences } from "@/app/interfaces/competence.types";
import { Box, Typography } from "@mui/material";

interface CompetenceTagListProps {
  competences: Competences
}
const CompetenceTagList: FC<CompetenceTagListProps> = ({ competences }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '16px',
        gap: '16px'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <LightbulbIcon color="primary"/>
        <Typography variant="body2" color="text.secondary">Competências do Pensamento Computacional</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'wrap',
          gap: '4px',
          marginLeft: '8px'
        }}
      >
        {competences.length === 0
          ? <CompetenceTag title="Não avaliada"/>
          : competences.map((competence, index) => <CompetenceTag key={index} title={competence.title}/>)}
      </Box>
    </Box>
  )
}

export default CompetenceTagList;