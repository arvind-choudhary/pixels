import { get } from "./http.services.config"

export const getTrendingItems = async () => {
    // https://www.pexels.com/
    const trendingItemsResp = await get('https://www.pexels.com/en-us/api/v3/search/trending?/');
    console.log("trendingItemsResp", trendingItemsResp);
    return trendingItemsResp
}