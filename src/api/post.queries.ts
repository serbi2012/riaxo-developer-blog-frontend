import axios from "axios";
import { BASE_URL } from "../constants/API";
import { IPost } from "../types/post.types";

export const fetchPostList = async (params?: any): Promise<IPost[]> => {
    const response = await axios.get(`${BASE_URL}/post`, { params });

    return response.data.data;
};

export const createPost = async (params?: any): Promise<IPost[]> => {
    const response = await axios.post(`${BASE_URL}/post/create`, { params });

    return response?.data;
};

export const updatePost = async (params?: any): Promise<IPost[]> => {
    const response = await axios.patch(`${BASE_URL}/post/update`, { params });

    return response?.data;
};

export const deletePost = async (params?: any): Promise<IPost[]> => {
    const response = await axios.delete(`${BASE_URL}/post/delete`, { params });

    return response?.data;
};
