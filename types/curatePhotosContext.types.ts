export interface ISrc {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
}

export interface IPhotos {
    id: number;
    width: number;
    height: number;
    url: string; // 'https://www.pexels.com/photo/food-plate-dinner-table-16233384/',
    photographer: string; // 'Nati',
    photographer_url: string; // 'https://www.pexels.com/@nati-87264186',
    photographer_id: number; //87264186,
    avg_color: string;
    src: ISrc;
    liked: boolean;
    alt: string;
}

export interface IPhotosData {
    page: number;
    per_page: number;
    photos: Array<IPhotos>
}


