import { UUID } from "crypto";

export interface Competence {
  id: UUID
  title: string;
  description: string;
};

export type Competences = Competence[];
