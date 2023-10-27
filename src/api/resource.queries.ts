import axios from "axios";
import { BASE_URL } from "../constants/API";

export const createImageUpload = async (image?: any) => {
    const headers = { "Content-Type": "multipart/form-data" };
    const response = await axios.post(`${BASE_URL}/image/upload`, { image: image }, { headers });

    return response?.data;
};
