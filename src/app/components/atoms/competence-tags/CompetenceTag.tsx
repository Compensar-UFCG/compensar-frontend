import { FC } from "react";
import { Box, Typography } from "@mui/material"

import { blueGrey } from '@mui/material/colors';
import getCompetenceColor from "@app/utils/competencesColor";

interface CompetenceTagProps {
  title: string
}
const CompetenceTag: FC<CompetenceTagProps> = ({ title }) => {
  const color = getCompetenceColor(title);
  return (
    <Box
      sx={{
        bgcolor: color,
        width: 'max-content',
        padding: '2px 4px',
        borderRadius: '4px'
      }}
    >
      <Typography sx={{ color: blueGrey[50], fontSize: '0.75rem'}}>{title}</Typography>
    </Box>
  )
}

export default CompetenceTag;