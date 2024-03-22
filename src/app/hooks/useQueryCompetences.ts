import { Competences } from "@interfaces/competence.types";
import { useQuery } from "@tanstack/react-query"

const useQueryCompetences = () => {
  async function getCompetences() {
    return await fetch(`/api/competences`).then(res => res.json()).catch(e => e);
  }

  const { data, ...props} = useQuery({
    queryKey: ['competences'],
    queryFn: getCompetences,
  })

  return {
    competences: data as Competences,
    ...props
  };
}

export default useQueryCompetences;