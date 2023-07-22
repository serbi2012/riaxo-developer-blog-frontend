import axios from "axios";
import { BASE_URL } from "../constants/API";

// 샘플 API
export const fetchSample = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/url경로`, {});

        return response.data.data.list_data;
    } catch (error) {
        console.error(error);
    }
};
