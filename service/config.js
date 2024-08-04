import axios from "axios";
import { getToken } from "../helper/authHelper";

const http = axios.create({
    baseURL: 'https://store.go-clothes.uz/v1'
});

http.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default http;
