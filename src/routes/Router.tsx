import { Navigate, Route, Routes } from "react-router-dom";

import { Login, Main, PortfolioList, Post, PostCreate, PostList, TagList } from "../pages";
import { AdminOnly } from "./AccountChecker";

export const Router = () => {
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
