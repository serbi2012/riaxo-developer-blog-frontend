import { useEffect, useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { fetchUserInfo } from "../api/login.queries";
import { useAlert } from "../hooks/useAlert";
import { isAdminModeState } from "../recoil/atoms/isAdminModeState";
import { getCookie } from "../utils/cookieUtils";

export const AdminOnly = () => {
    const [adminMode] = useRecoilState(isAdminModeState);

    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    const { handleAlert } = useAlert();

    const authToken = getCookie("riaxo-blog-auth-token");

    useEffect(() => {
        fetchData();
    }, [adminMode]);

    const fetchData = async () => {
        try {
            const response = await fetchUserInfo({ accessToken: authToken });
            const userRole = response?.user?.role;

            if (userRole !== "admin") {
                const errorMessage = `해당 페이지는 관리자만 접근가능합니다. \n 해당 기능 사용을 원하신다면, rlaxo0306@gmail.com으로 연락바랍니다.`;

                throw Error(errorMessage);
            } else {
                setIsLoading(false);
            }
        } catch (error: any) {
            setIsLoading(false);
            await handleAlert(error?.message);
            navigate("/");
        }
    };

    if (isLoading) {
        return <div>로딩중</div>;
    }

    return <Outlet />;
};
