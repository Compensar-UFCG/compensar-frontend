import { FC } from "react";

import { Container, Typography } from "@mui/material";
import Competences from "./Competences";
import useQueryCompetences from "./hooks/useQueryCompetences";
import { Skeleton } from '@mui/material';

const CompetencesContainer: FC = () => {
  const { competences, isLoading, isError } = useQueryCompetences();

  if(isError) return null;

  if(isLoading) return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
      margin: '24px 16px',
    }}>
      <Skeleton variant="rectangular" sx={{ width: '84vmax', height: '20vmax' }} />
    </Container>
  );

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
      margin: '24px 16px',
    }}>
      <Typography variant='h4' gutterBottom>Pensamento Computacional</Typography>
      <Competences competences={competences} />
    </Container>
  )
}

export default CompetencesContainer;