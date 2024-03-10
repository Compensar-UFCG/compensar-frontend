import { FC } from "react";
import Image from 'next/image'

import { Competence as CompetenceItem } from "../../app/interfaces/competence.types";

interface CompetenceProps  {
  competence: CompetenceItem
}

const Competence: FC<CompetenceProps>  = ({ competence }) => {
  const { title, description } = competence;

  return (
    <div className="competence-container">
      <Image
        className="competence-image"
        src="https://i.pravatar.cc/300"
        alt={title}
        width={100}
        height={100}
      />
      <div className="competence-context">
        <h3 className="competence-title">{title}</h3>
        <article>{description}</article>
      </div>
    </div>
  )
}

export default Competence;