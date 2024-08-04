// service.js
import http from "./config";
import Cookies from "js-cookie";

export const getProduct = (limit, page) => {
    return http.get(`/products?page=${page}&limit=${limit}`);
}
export const getSingleProduct = () => {
    const id = Cookies.get("product_id");
    if (id) {
        return http.get(`/product/${id}`);
    } else {
        throw new Error("Product ID not found in cookies.");
    }
}
