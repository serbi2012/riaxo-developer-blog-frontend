import { useLocation } from "react-router-dom";
import Router from "./routes/Router";
import { useEffect } from "react";
import { isSideBarOpenState } from "./recoil/atoms";
import { useRecoilState } from "recoil";
import { fetchLogin } from "./api/login.queries";

const App = () => {
    const [, setIsSideBarOpen] = useRecoilState(isSideBarOpenState);

    const location = useLocation();

    useEffect(() => {
        setIsSideBarOpen(false);
    }, [location]);

    useEffect(() => {
        const handleEvent = async (event: any) => {
            if (event.data.type === "github_login") {
                const code = event?.data?.code;

                if (code) {
                    console.log("handleEvent ~ code:", code);
                    const test = await fetchLogin({ code });
                    console.log("handleEvent ~ test:", test);
                }
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
