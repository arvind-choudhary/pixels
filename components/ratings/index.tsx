import React, { useCallback, useMemo, useState } from 'react'
import { Rating as RatingComponent } from 'react-simple-star-rating'
import { IRatingProps } from './rating.types'

const Rating = ({ value, onClick, size = 14, className = "flex flex-row", iconsCount = 5 }: IRatingProps) => {
    const [rating, setRating] = useState(value ?? 0)

    // Catch Rating value
    const handleRating = useCallback((rate: number) => {
        setRating(rate);
        onClick && onClick(rate);
    }, []);

    return useMemo(() => (
        <RatingComponent
            onClick={handleRating}
            initialValue={rating}
            size={size}
            className={className}
            iconsCount={iconsCount}
        />
    ), [rating]) 
}

export { Rating };