import axios from "axios";
import { BASE_URL } from "../constants/API";
import { IPost } from "../types/post";

export const fetchPostList = async (params?: any): Promise<IPost[]> => {
    const response = await axios.get(`${BASE_URL}/api/post`, { params });

    return response.data.data;
};

export const createPost = async (params?: any): Promise<IPost[]> => {
    const response = await axios.post(`${BASE_URL}/api/post/create`, { params });

    return response?.data;
};

export const updatePost = async (params?: any): Promise<IPost[]> => {
    const response = await axios.patch(`${BASE_URL}/api/post/update`, { params });

    return response?.data;
};

export const deletePost = async (params?: any): Promise<IPost[]> => {
    const response = await axios.delete(`${BASE_URL}/api/post/delete`, { params });

    return response?.data;
};
