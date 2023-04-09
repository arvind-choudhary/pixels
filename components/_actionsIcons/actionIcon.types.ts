import { ImageProps } from "next/image";

export interface IAddToWishListProps {
    value: boolean;
    className: string;
    onClick: (input: any) => void
}

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export interface ISearchIconProps extends IButtonProps {}
export interface ICrossIconProps extends IButtonProps {}
export interface IUserImageIconProps extends ImageProps {}
export interface IDownloadIconProps extends ImageProps { src: string; filename: string; }
