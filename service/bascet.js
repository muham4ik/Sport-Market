import http from "./config";


export const postProduct = async (id) => {
    if (!id) {
        throw new Error("Product ID not found.");
    }
    try {
        const response = await http.post("/basket", { productId: id });
        return response.data;
    } catch (error) {
        console.error("Error adding product to basket:", error.response?.data || error.message);
        throw error;
    }
};
export const gettProduct = async () => {
    try {
        const response = await http.get("/user-baskets");
        return response.data;
    } catch (error) {
        console.error("Error fetching product from basket:", error.response?.data || error.message);
        throw error;
    }
};

