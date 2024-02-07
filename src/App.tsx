import { useLocation } from "react-router-dom";
import { Router } from "./routes/Router";
import { useEffect } from "react";
import { isSideBarOpenState } from "./recoil/atoms";
import { useRecoilState } from "recoil";
import { fetchLogin, fetchUserInfo } from "./api/login.queries";
import { isAdminModeState } from "./recoil/atoms/isAdminModeState";
import { useLogin, useLogout, useRefreshToken } from "./hooks/useAuth";
import { getCookie } from "./utils/cookieUtils";
import { useCustomQuery } from "./hooks/useCustomQuery";
import { useCustomMutation } from "./hooks/useCustomMutation";

const App = () => {
    const [, setIsSideBarOpen] = useRecoilState(isSideBarOpenState);
    const [adminMode, setAdminMode] = useRecoilState(isAdminModeState);

    const location = useLocation();
    const { handleLogin } = useLogin();
    const { handleLogout } = useLogout();
    const { handleRefreshToken } = useRefreshToken();

    const riaxoBlogAuthToken = getCookie("riaxo-blog-auth-token");

    useCustomQuery(["userInfo", riaxoBlogAuthToken], () => fetchUserInfo({ accessToken: riaxoBlogAuthToken }), {
        onSuccess: async (data) => {
            if (data?.user?.role === "admin") {
                setAdminMode(true);
            } else {
                handleRefreshToken();
            }
        },
        onError: async () => {
            handleRefreshToken();
        },
        enabled: !!riaxoBlogAuthToken,
    });

    const { mutate: handleGithubLogin } = useCustomMutation(fetchLogin, {
        onSuccess: (data) => {
            setAdminMode(data?.role === "admin");
            if (data?.role === "admin") {
                handleLogin(data?.accessToken, data?.refreshToken);
            } else {
                handleLogout();
            }
        },
    });

    useEffect(() => {
        setIsSideBarOpen(false);
    }, [location, adminMode]);

    useEffect(() => {
        const handleEvent = (event: any) => {
            if (event.data.type === "github_login") {
                const code = event.data.code;
                if (code) {
                    handleGithubLogin({ code });
                }
            }
        };

        window.addEventListener("message", handleEvent);

        return () => {
            window.removeEventListener("message", handleEvent);
        };
    }, [handleGithubLogin]);

    return (
        <>
            <Router />
        </>
    );
};

export default App;
