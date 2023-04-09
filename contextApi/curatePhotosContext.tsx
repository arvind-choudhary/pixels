"use client";

import { IPhotosData } from "@/types/curatePhotosContext.types";
import { ReactNode, createContext } from "react";

interface IProps {
    children?: ReactNode;
    photosData: IPhotosData
}

interface IProviderValues extends IPhotosData {}

export const CuratePhotosContext = createContext<any>(null);

export const CuratePhotosContextProvider = ({ children, photosData }: IProps) => {
    const { page, per_page, photos } = photosData;
    return (
        <CuratePhotosContext.Provider value={{ page, per_page, photos } as IProviderValues}>
            {children}
        </CuratePhotosContext.Provider>
    )
}