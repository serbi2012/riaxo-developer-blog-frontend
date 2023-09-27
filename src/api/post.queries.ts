import axios from "axios";
import { BASE_URL } from "../constants/API";
import { IPost } from "../types/post.types";

export const fetchPostList = async (params?: any): Promise<IPost[]> => {
    const response = await axios.get(`${BASE_URL}/post`, { params });

    return response.data.data;
};
