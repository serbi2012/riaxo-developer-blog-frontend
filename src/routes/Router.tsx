import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main.component";
import Customer from "../pages/Customer/Customer.component";
import Sample from "../pages/Sample/Sample.component";
import Sample2 from "../pages/Sample2/Sample2.component";

const Router = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/customer"}>
                <Route path={"list"} element={<Customer />} />
            </Route>
            <Route path={"sample"} element={<Sample />} />
            <Route path={"sample2"} element={<Sample2 />} />
            {/* 모든 경로에 대한 리디렉션 */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default Router;
