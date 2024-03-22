import { FC } from "react";
import { Competences as CompetenceList } from "@app/interfaces/competence.types";
import Competence from "./Competence";
import { Grid } from "@mui/material";
interface CompetencesProps {
  competences: CompetenceList
}

const Competences: FC<CompetencesProps>  = ({ competences }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: 'space-evenly',
        alignContent: 'space-evenly',
        alignItems: 'center',
        rowGap: '16px',
        marginTop: 0
      }}
    >
      {competences.map((competence, index) => (
        <Competence key={index} competence={competence}/>
      ))}
    </Grid>
  )
}

export default Competences;