import { UUID } from "crypto";
import { Competences } from "./competence.types";

export type Font = "enem" | "pisa" | "olimpiadas" | "school" | "other"
export type Alternatives = string[];

export interface Question {
  id: UUID | string;
  title: string;
  statement: string;
  image?: string;
  type: string;
  font: Font;
  year?: number;
  alternatives?: Alternatives;
  response: string;
  competences: Competences;
}

export type Questions = Question[];