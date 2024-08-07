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


export const deleteProduct = async (id) => {
    if (!id) {
        throw new Error("No product ID provided");
    }

    try {
        console.log(`Attempting to delete product with ID: ${id}`);
        const response = await axios.delete(`/v1/products/${id}`);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Failed to delete product with ID: ${id}`);
        }
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
    }
};
