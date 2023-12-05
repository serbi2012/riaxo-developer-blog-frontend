import { useRecoilState } from "recoil";
import { getCookie, removeCookie, setCookie } from "../utils/cookieUtils";
import { isAdminModeState } from "../recoil/atoms/isAdminModeState";
import { useSnackbar } from "notistack";
import { fetchRefreshToken } from "../api/login.queries";

export const useLogout = () => {
    const [, setAdminMode] = useRecoilState(isAdminModeState);

    const { enqueueSnackbar } = useSnackbar();

    const handleLogout = (deleteOnlyAccess?: boolean) => {
        setAdminMode(false);

        removeCookie("riaxo-blog-auth-token");

        if (!deleteOnlyAccess) {
            removeCookie("riaxo-blog-auth-refresh-token");
        }

        enqueueSnackbar("관리자 모드가 해제되었습니다.", { variant: "success" });
    };

    return { handleLogout };
};

export const useLogin = () => {
    const [, setAdminMode] = useRecoilState(isAdminModeState);

    const { enqueueSnackbar } = useSnackbar();

    const handleLogin = (accessToken: string, refreshToken: string, reLogin?: boolean) => {
        setAdminMode(true);
        setCookie("riaxo-blog-auth-token", accessToken);
        setCookie("riaxo-blog-auth-refresh-token", refreshToken);

        if (!reLogin) {
            enqueueSnackbar("관리자 모드로 설정되었습니다.", { variant: "success" });
        }
    };

    return { handleLogin };
};

export const useRefreshToken = () => {
    const riaxoBlogAuthRefreshToken = getCookie("riaxo-blog-auth-refresh-token");

    const { handleLogin } = useLogin();
    const { handleLogout } = useLogout();

    const handleRefreshToken = async () => {
        if (riaxoBlogAuthRefreshToken) {
            try {
                const data = await fetchRefreshToken(riaxoBlogAuthRefreshToken);
                handleLogin(data.accessToken, riaxoBlogAuthRefreshToken, true);
            } catch (error) {
                handleLogout(true);
            }
        } else {
            handleLogout();
        }
    };

    return { handleRefreshToken };
};
