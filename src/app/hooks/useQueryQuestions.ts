import { useQuery } from "@tanstack/react-query"
import fetchQuestions from "./fetchs/fetchQuestions";
import { Questions } from "@interfaces/question.types";
import { useProtectedSessionContext } from "@contexts/ProtectedProvider";

const useQueryQuestions = () => {
  const { token } = useProtectedSessionContext();

  const { data, ...props } = useQuery({
    queryKey: ['competences', token],
    queryFn: () => fetchQuestions(token || "INVALID_TOKEN"),
  })

  return {
    questions: data as Questions,
    ...props
  };
}

export default useQueryQuestions;