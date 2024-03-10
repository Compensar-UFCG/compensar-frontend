import { FC } from "react";
import Image from 'next/image'

interface ChevronIconProps {
  name: 'right' | 'left'
}

const ChevronIcon: FC<ChevronIconProps> = ({ name }) => {
  const iconRef = {
    'right': "/svg/chevronRight.svg",
    'left': "/svg/chevronLeft.svg"
  }

  return <Image alt={`chevron-${name}`} src={iconRef[name]} width={28} height={28}/>
}

export default ChevronIcon;