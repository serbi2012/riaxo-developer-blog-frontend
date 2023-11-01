import { useLocation } from "react-router-dom";
import Router from "./routes/Router";
import { useEffect } from "react";
import { isSideBarOpenState } from "./recoil/atoms";
import { useRecoilState } from "recoil";

const App = () => {
    const [, setIsSideBarOpen] = useRecoilState(isSideBarOpenState);

    const location = useLocation();

    useEffect(() => {
        setIsSideBarOpen(false);
    }, [location]);

    return (
        <>
            <Router />
        </>
    );
};

export default App;
