import { IReadMoreProps } from "./readMore.types";

export const ReadMore = ({ limit = 30, content = "", actionIcon }: IReadMoreProps) => {
    return (
        <>
            {content.substring(0, limit)} {actionIcon}
        </>
    )
}