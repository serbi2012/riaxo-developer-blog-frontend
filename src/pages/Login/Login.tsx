import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import { getQueryString } from "../../utils/getQueryString";

export const Login: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        const queryString = getQueryString();

        if (queryString?.code) {
            window.opener.postMessage({ type: "github_login", code: queryString?.code }, "*");
            window.close();
        } else {
            console.error("Access token not found");
        }
    }, [location]);

    return (
        <div>
            <p>로그인 진행중입니다...</p>
        </div>
    );
};
