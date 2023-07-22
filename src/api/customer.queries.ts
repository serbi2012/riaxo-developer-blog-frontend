import axios from "axios";
import { BASE_URL } from "../constants/API";

// 온라인회원 목록 API
export const fetchCustomerList = async () => {
    try {
        const params = {
            first_condition: "or",
            item_per_page: 500000,
            page_index: 1,
            schClassNm: "",
            schKwd: "",
            schName: "",
            schParams: {},
            schShopName: "",
            second_condition: "or",
            sort_is_ascend: true,
            third_condition: "or",
        };
        const response = await axios.post(`${BASE_URL}/api/v2/customer/list`, params);

        return response.data.data.list_data;
    } catch (error) {
        console.error(error);
    }
};
