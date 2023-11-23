import { useLocation } from "react-router-dom";
import Router from "./routes/Router";
import { useEffect } from "react";
import { isSideBarOpenState } from "./recoil/atoms";
import { useRecoilState } from "recoil";
import { fetchLogin } from "./api/login.queries";
import { useSnackbar } from "notistack";
import { isAdminModeState } from "./recoil/atoms/isAdminModeState";
import { useLogin, useLogout } from "./hooks/useAuth";

const App = () => {
    const [, setIsSideBarOpen] = useRecoilState(isSideBarOpenState);
    const [adminMode, setAdminMode] = useRecoilState(isAdminModeState);

    const location = useLocation();
    const { enqueueSnackbar } = useSnackbar();
    const { handleLogin } = useLogin();
    const { handleLogout } = useLogout();

    useEffect(() => {
        setIsSideBarOpen(false);
    }, [location, adminMode]);

    useEffect(() => {
        const handleEvent = async (event: any) => {
            try {
                if (event.data.type === "github_login") {
                    const code = event?.data?.code;

                    if (code) {
                        const response = await fetchLogin({ code });

                        setAdminMode(response.role === "admin");
                        if (response.role === "admin") {
                            handleLogin(response?.token);
                        } else {
                            handleLogout();

                            throw Error("해당 계정은 관리자 계정이 아닙니다.");
                        }
                    }
                }
            } catch (error: any) {
                enqueueSnackbar(error.message, { variant: "error" });
                console.error(error);
            }
        };

        window.addEventListener("message", handleEvent);

        return () => {
            window.removeEventListener("message", handleEvent);
        };
    }, []);

    return (
        <>
            <Router />
        </>
    );
};

export default App;
