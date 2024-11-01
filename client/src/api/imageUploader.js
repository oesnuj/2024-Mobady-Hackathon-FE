import axios from "axios";

export const uploadImage = async (file) => {
    const API_ROUTE = process.env.REACT_APP_BACKEND_API;
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await axios.post(`${API_ROUTE}/api/aws`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        console.log("File uploaded successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};
