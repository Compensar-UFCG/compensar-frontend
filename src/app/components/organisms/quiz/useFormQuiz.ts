import { useForm } from "react-hook-form"
import { QuizForm } from "@interfaces/quiz.types"

export function useFormQuiz() {
  return useForm<QuizForm>({
    defaultValues: {
      title: 'Questionário'
    }
  })
};