import axios from "axios";
import { BASE_URL } from "../constants/API";

export const fetchTagList = async (params?: any): Promise<any[]> => {
    const response = await axios.get(`${BASE_URL}/api/tag`, { params });

    return response.data.data;
};

export const createTag = async (params?: any): Promise<any[]> => {
    const response = await axios.post(`${BASE_URL}/api/tag/create`, { params });

    return response?.data;
};

export const updateTag = async (params?: any): Promise<any[]> => {
    const response = await axios.patch(`${BASE_URL}/api/tag/update`, { params });

    return response?.data;
};

export const deleteTag = async (params?: any): Promise<any[]> => {
    const response = await axios.delete(`${BASE_URL}/api/tag/delete`, { params });

    return response?.data;
};
