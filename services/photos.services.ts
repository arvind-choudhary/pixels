import { get } from "./http.services.config";
import { cache } from 'react';


export const getCuratedPhotosList = cache(async () => {
    const photosList = await get('/v1/curated');
    return photosList.data;
});