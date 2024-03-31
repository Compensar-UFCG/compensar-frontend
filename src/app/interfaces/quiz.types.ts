import { Questions } from "./question.types";

export interface QuizForm {
  title: string;
}

export interface Quiz extends QuizForm{
  questions: Questions;
}
