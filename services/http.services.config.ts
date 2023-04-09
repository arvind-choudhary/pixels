import axios, { AxiosDefaults, AxiosRequestConfig } from "axios";
import { requestInterceptor } from "./axiosIntrerceptors.services";

interface IRequest extends AxiosRequestConfig {
    showLoader?: boolean;
}

const defaultAxiosOptions = {
    baseURL: 'https://api.pexels.com',
}

const catchApiFailure = (error: any) => {
    throw error;
}

const finalizationOfApiRequest = () => {

}

export const _createAxiosInstance = (options: AxiosDefaults) => {
    const axiosInstance = axios.create(options);
    axiosInstance.interceptors.request.use(requestInterceptor);
    const get = (url: string, config?: IRequest) => axiosInstance.get(url, config).catch(catchApiFailure).finally(finalizationOfApiRequest);
    const put = (url: string, data: any, config?: IRequest) => axiosInstance.put(url, data, config).finally(finalizationOfApiRequest);
    const post = (url: string, data: any, config?: IRequest) => axiosInstance.post(url, data, config).finally(finalizationOfApiRequest);

    return { get, put, post }
}

const setApiBasePath = (type: 'products' | 'user') => (endPoint?: any): string => endPoint ? `/${type}/${endPoint}` : `/${type}`;

const axiosIns = _createAxiosInstance(defaultAxiosOptions);
const get = axiosIns.get;
const post = axiosIns.post;
const put = axiosIns.put;
export { get, post, put, setApiBasePath };