import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main.component";
import Post from "../pages/Post/Post.component";
import PostList from "../pages/PostList/PostList.component";
import PostCreate from "../pages/PostCreate/PostCreate.component";
import PortfolioList from "../pages/PortfolioList/PortfolioList.component";
import Login from "../pages/Login/Login.component";

const Router = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/post"}>
                <Route path={""} element={<Post />} />
                <Route path={"list"} element={<PostList />} />
                <Route path={"create"} element={<PostCreate />} />
                <Route path={"edit"} element={<PostCreate />} />
            </Route>
            <Route path={"/portfolio"}>
                <Route path={""} element={<Post />} />
                <Route path={"list"} element={<PortfolioList />} />
            </Route>

            {/* 모든 경로에 대한 리디렉션 */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default Router;
