import axios from 'axios';
import * as config from "./global-config.json";
const env = process.env.NEXT_PUBLIC_TYPE;


const apiConfig = config.default;

export const homeUrl = apiConfig[env].domain;


export const baseUrl = axios.create({
    baseURL: homeUrl,
});

