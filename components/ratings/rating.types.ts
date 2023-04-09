import { RatingProps } from 'react-simple-star-rating'

export interface IRatingProps extends RatingProps {
    value?: number;
    onClick(value: number): void;
}