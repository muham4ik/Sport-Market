import http from "./config";


export const postLike = async (id) => {
    if (id) {
        return await http.post(`/like/${id}`);
    } else {
        throw new Error("Product ID not found.");
    }
};

export const getLike = async (page ,limit) => {
        return await http.get(`/wishlist?page=${page}&limit=${limit}`);
};