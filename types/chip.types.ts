import React from 'react'

export interface IChipProps extends React.HTMLAttributes<HTMLButtonElement> {
    label?: string;
    closeIcon?: boolean;
}