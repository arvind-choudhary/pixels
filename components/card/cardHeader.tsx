import { ReactNode } from 'react'
import cardStyles from "./card.module.scss";

interface IProps {
  children?: ReactNode;
  className?: string;
}

const CardHeader = ({ children, className }: IProps) => {
  return (
    <section className={className}>
      {children}
    </section>
  )
}

export { CardHeader }