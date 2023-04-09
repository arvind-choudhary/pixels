"use client";

import { CuratePhotosContext } from "@/contextApi/curatePhotosContext";
import { useCallback, useContext } from "react";
import { RenderList } from "../renderList";
import { Card } from "../card/card";
import { IProduct } from "./productList.types";
import { CardBody } from "../card/CardBody";
import Image from "next/image";
import { IPhotosData } from "@/types/curatePhotosContext.types";
import { AddToWishListIcon, DownloadIcon } from "@/components/_actionsIcons";

export const CurateProductsList = () => {
    
    const { photos } = useContext(CuratePhotosContext) as IPhotosData;

    return (
        <RenderList
            list={photos}
            render={(values: IProduct, index) => {

                const onClickOfRating = useCallback((ratingValue: number) => { console.log(ratingValue); }, []);
                const splitFileUrl = values.src.large2x.split('/');
                const fileName = splitFileUrl[splitFileUrl.length - 1]

                return (
                    <Card key={index} className="relative group">
                        <CardBody className="flex rounded-md overflow-hidden relative">
                            <AddToWishListIcon 
                                value={values.liked} 
                                className="absolute p-2 rounded-md top-3 right-3 opacity-0 group-hover:opacity-100" 
                                onClick={onClickOfRating}
                            />
                            <DownloadIcon
                                filename={fileName}
                                src={values.src.large2x}
                                className="absolute rounded-md p-2 z-10 bottom-3 right-3 opacity-0 group-hover:opacity-100"
                            />
                            <Image
                                width={200}
                                height={200}
                                alt={values.alt}
                                quality={100}
                                src={values.src.medium}
                                className="w-full h-full"
                            />
                        </CardBody>
                    </Card>
                )
            }}
        />
    )
    
}