import { get, setApiBasePath } from "./http.services.config";

const setEndPoint = setApiBasePath('products');

export const getProductById = (async (productId: number): Promise<any> => {
    return await get(setEndPoint(productId) as string);
});

export const getAllProducts = async (): Promise<any> => {
    const productsList = await get(setEndPoint()) as { data: { products: Array<any> }};
    return productsList.data.products;
}