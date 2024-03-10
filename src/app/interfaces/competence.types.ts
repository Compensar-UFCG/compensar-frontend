import { UUID } from "crypto";

export interface Competence {
  id: UUID | string;
  title: string;
  description: string;
};

export type Competences = Competence[];
