import axios from "axios";

export const getRecommendPlaceData = async (imageUrl) => {
    const API_ROUTE = process.env.REACT_APP_BACKEND_API;

    try {
        const response = await axios.get(`${API_ROUTE}/api/image?imageUrl=${imageUrl}`);
        console.log("File uploaded successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};
