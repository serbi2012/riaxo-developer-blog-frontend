import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Post from "../pages/Post";
import PostList from "../pages/PostList";
import PostCreate from "../pages/PostCreate";
import PortfolioList from "../pages/PortfolioList";
import Login from "../pages/Login";
import { AdminOnly } from "./AccountChecker";
import TagList from "../pages/TagList";

const Router = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/post"}>
                <Route path={""} element={<Post />} />
                <Route path={"list"} element={<PostList />} />
                <Route element={<AdminOnly />}>
                    <Route path={"create"} element={<PostCreate />} />
                    <Route path={"edit"} element={<PostCreate />} />
                </Route>
            </Route>
            <Route path={"/portfolio"}>
                <Route path={""} element={<Post />} />
                <Route path={"list"} element={<PortfolioList />} />
            </Route>
            <Route path={"/tag"}>
                <Route path={"list"} element={<TagList />} />
            </Route>

            {/* 모든 경로에 대한 리디렉션 */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default Router;
