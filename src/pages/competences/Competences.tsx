import { FC, useState } from "react";
import { Competences as CompetenceList } from "../../app/interfaces/competence";
import Competence from "./Competence";

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
    <div className="competences-container">
      <button className="prev-btn" onClick={previous}>
        <img src="/svg/chevronLeft.svg" />
      </button>
      <div className="competences-context">
        {caroussel.map(competence => (
          <Competence key={competence.id} competence={competence}/>
        ))}
      </div>
      <button className="next-btn" onClick={next}>
        <img src="/svg/chevronRight.svg" />
      </button>
    </div>
  )
}

export default Competences;