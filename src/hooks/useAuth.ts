import { useRecoilState } from "recoil";
import { removeCookie, setCookie } from "../utils/cookieUtils";
import { isAdminModeState } from "../recoil/atoms/isAdminModeState";
import { useSnackbar } from "notistack";

export const useLogout = () => {
    const [, setAdminMode] = useRecoilState(isAdminModeState);

    const { enqueueSnackbar } = useSnackbar();

    const handleLogout = () => {
        setAdminMode(false);

        removeCookie("riaxo-blog-auth-token");

        enqueueSnackbar("관리자 모드가 해제되었습니다.", { variant: "success" });
    };

    return { handleLogout };
};

export const useLogin = () => {
    const [, setAdminMode] = useRecoilState(isAdminModeState);

    const handleLogin = (token: string) => {
        setAdminMode(true);

        setCookie("riaxo-blog-auth-token", token);
    };

    return { handleLogin };
};
