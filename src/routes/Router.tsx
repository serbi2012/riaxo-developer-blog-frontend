import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main.component";


const Router = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Main />} />
            
            
            {/* 모든 경로에 대한 리디렉션 */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default Router;
