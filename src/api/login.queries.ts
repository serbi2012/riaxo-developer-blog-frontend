import axios from "axios";
import { BASE_URL } from "../constants/API";
import { setCookie } from "../utils/cookieUtils";

export const fetchLogin = async (params?: any) => {
    const response = await axios.get(`${BASE_URL}/auth/github`, { params });
    const token = response?.data?.token;

    if (token) {
        setCookie("riaxo-blog-auth-token", token);
    }

    return response.data;
};
