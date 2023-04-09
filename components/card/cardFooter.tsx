import { ReactNode } from 'react'
import cardStyles from "./card.module.scss";

interface IProps {
  children?: ReactNode;
  className?: string;
}

const CardFooter = ({ children, className = ""}: IProps) => {
  return (
    <section className={className}>
      {children}
    </section>
  )
}

export { CardFooter }