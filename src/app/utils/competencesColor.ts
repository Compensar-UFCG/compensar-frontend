import { cyan, pink, lime, purple } from '@mui/material/colors';

type CompetencesColor =
  "co" |
  "an" |
  "re" |
  "de" |
  "ab" |
  "al" |
  "au" |
  "si" |
  "pa"

const competencesColor = {
  "co": cyan[600],
  "an": pink[600],
  "re": lime[600],
  "de": pink[600],
  "ab": cyan[600],
  "al": lime[600],
  "au": cyan[600],
  "si": pink[600],
  "pa": lime[600],
}

const getCompetenceColor = (nameFull: string) => {
  const name = nameFull.slice(0,2).toLowerCase() as CompetencesColor;
  return competencesColor[name] || purple[800]
}


export default getCompetenceColor;