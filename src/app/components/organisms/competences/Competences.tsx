import { FC } from "react";
import { Competences as CompetenceList } from "@app/interfaces/competence.types";
import Competence from "./Competence";
import { Container, Grid } from "@mui/material";
interface CompetencesProps {
  competences: CompetenceList
}

const Competences: FC<CompetencesProps>  = ({ competences }) => {
  return (
    <Container sx={{ display: 'flex', alignItems: 'center'}}>
      <Grid container spacing={2} sx={{
          justifyContent: 'space-evenly',
          alignContent: 'space-evenly',
          alignItems: 'center',
          gap: '8px' }}>
        {competences.map((competence, index) => (
          <Competence key={index} competence={competence}/>
        ))}
      </Grid>
    </Container>
  )
}

export default Competences;