import { FC, useState } from "react";
import { Competences as CompetenceList } from "@app/interfaces/competence.types";
import Competence from "./Competence";
import ChevronIcon from "@components/atoms/ChevronIcon";
import { Box, Container, IconButton } from "@mui/material";
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
interface CompetencesProps {
  competences: CompetenceList
}

const Competences: FC<CompetencesProps>  = ({ competences }) => {
  const MAX_COMPETENCES = 4;
  const newCompetences = competences.map((item, index) => ({...item, index: index}))
  const [caroussel, setCaroussel] = useState(newCompetences.slice(0, MAX_COMPETENCES))

  const getNextCompetenceIndex = () => caroussel[MAX_COMPETENCES-1].index
  const getFirstCompetenceIndex = () => caroussel[0].index
  
  const next = () => {
    const nextIndex = getNextCompetenceIndex()
    if(nextIndex != newCompetences[newCompetences.length-1].index)
      setCaroussel([...caroussel.slice(1, MAX_COMPETENCES), newCompetences[nextIndex+1]])
  }

  const previous = () => {
    const firstIndex = getFirstCompetenceIndex()
    if(firstIndex > newCompetences[0].index)
      setCaroussel([newCompetences[firstIndex-1], ...caroussel.slice(0, MAX_COMPETENCES-1)])
  }
  
  return (
    <Container sx={{ display: 'flex', alignItems: 'center'}}>
      <IconButton onClick={previous}>
        <ChevronLeftRoundedIcon fontSize="large"/>
      </IconButton>
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
        {caroussel.map((competence, index) => (
          <Competence key={index} competence={competence}/>
        ))}
      </Box>
      <IconButton onClick={next}>
        <ChevronRightRoundedIcon fontSize="large"/>
      </IconButton>
    </Container>
  )
}

export default Competences;