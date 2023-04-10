import { IChipProps } from '@/types/chip.types'
import { CrossIcon } from '../_actionsIcons'

export const Chip = ({ label = "Default", closeIcon = false, ...rest }: IChipProps) => {
  return (
    <span className='inline-flex place-content-center px-4 py-2 rounded-full border' {...rest} >
      {label} { closeIcon ? <CrossIcon className='ml-2' /> : false }
    </span>
  )
}
