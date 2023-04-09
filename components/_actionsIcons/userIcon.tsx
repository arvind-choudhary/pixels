import { memo } from "react"
import { IUserImageIconProps } from "./actionIcon.types"
import Image from "next/image"

export const UserImageIcon = memo(({ src = "" }: IUserImageIconProps) => {
    return (
        <Image
            src={src}
            width={150}
            height={150}
            alt="user image"
        />
    )
})