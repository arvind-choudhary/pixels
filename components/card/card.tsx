import { useMemo } from 'react'
import { IProps } from './card.types';

const Card = ({ children, className = "" }: IProps) => {
  return useMemo(() => {
    return (
      <section className={className}>
        {children}
      </section>
    )
  }, [children])
}

export { Card }