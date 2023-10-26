import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main.component";
import Post from "../pages/Post/Post.component";
import PostList from "../pages/PostList/PostList.component";
import PostCreate from "../pages/PostCreate/PostCreate.component";

const Router = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/post"} element={<Post />} />
            <Route path={"/post-list"} element={<PostList />} />
            <Route path={"/post-create"} element={<PostCreate />} />

            {/* 모든 경로에 대한 리디렉션 */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default Router;
