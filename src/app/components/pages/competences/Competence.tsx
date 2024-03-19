import { FC } from "react";

import { Competence as CompetenceItem } from "@app/interfaces/competence.types";
import { Avatar, Box, Typography } from "@mui/material";
import { getLittleDescription } from "./utils";

interface CompetenceProps  {
  competence: CompetenceItem
}

const Competence: FC<CompetenceProps>  = ({ competence }) => {
  const { title, description } = competence;
  const littleDescription = getLittleDescription(description)

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: '260px'
    }}>
      <Avatar alt="competence-image" src="https://i.pravatar.cc/300" sx={{ width: 64, height: 64 }}/>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px'
      }}>
        <Typography variant="subtitle1" sx={{ textAlign: 'center'}}>{title}</Typography>
        <Typography variant="body2" sx={{ textAlign: 'center'}}>{littleDescription}</Typography>
      </Box>
    </Box>
  )
}

export default Competence;