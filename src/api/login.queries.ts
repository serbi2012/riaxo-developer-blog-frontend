import axios from "axios";
import { BASE_URL } from "../constants/API";

export const fetchLogin = async (params?: any) => {
    const response = await axios.get(`${BASE_URL}/auth/github`, { params });

    return response.data;
};

export const fetchUserInfo = async (params?: any) => {
    const headers = { Authorization: `Bearer ${params.accessToken}` };
    const response = await axios.get(`${BASE_URL}/auth/user-info`, { params, headers });

    return response.data;
};

export const fetchRefreshToken = async (params?: any) => {
    const response = await axios.post(`${BASE_URL}/auth/refresh`, { params });
    return response.data;
};
