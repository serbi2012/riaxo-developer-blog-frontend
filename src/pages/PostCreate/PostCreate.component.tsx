/* eslint-disable @typescript-eslint/no-unused-vars */
// import { T } from "../../styles/TextGuide.styles";
import * as S from "./PostCreate.styles";
import { Autocomplete, Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { TINY_MCE_API_KEY } from "../../constants/API";
import { EDIT_TOOLBAR, PLUGINS } from "../../constants/tinyMceOption";
import { createPost, fetchPostList, updatePost } from "../../api/post.queries";
import { useLocation, useNavigate } from "react-router-dom";
import { IPost } from "../../types/post.types";
import { getQueryString } from "../../utils/getQueryString";

const TAG_ITEMS = [
    { label: "Dev", value: "Dev" },
    { label: "React", value: "React" },
    { label: "NodeJS", value: "NodeJS" },
];

const PostCreate: React.FC = () => {
    const editorRef = useRef<any>(null);

    const [pathname, setPathname] = useState<string>("");
    const [defaultPost, setDefaultPost] = useState<IPost>({});
    const [title, setTitle] = useState<string>("");
    const [tags, setTags] = useState<any[]>([]);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setPathname(location?.pathname);

        if (location?.pathname === "/post/edit") {
            (async () => {
                const queryString = getQueryString();

                const response = await fetchPostList(queryString);
                const parsedTags: any = response[0]?.tags?.map((item) => ({ label: item, value: item }));
                setDefaultPost(response[0]);
                setTitle(String(response[0]?.title));
                setTags(parsedTags);
            })();
        }
    }, [location]);

    const onSubmitHandler = async (event: any) => {
        event?.preventDefault();

        if (editorRef.current) {
            switch (pathname) {
                case "/post/create":
                    try {
                        const content = editorRef.current.getContent();
                        const parsedTags = tags?.map((item) => item?.value);

                        const body = {
                            title: title,
                            content: content,
                            tags: parsedTags,
                        };

                        await createPost(body);
                        navigate("/");
                    } catch (error) {
                        console.error(error);
                    }
                    break;
                case "/post/edit":
                    try {
                        const content = editorRef.current.getContent();
                        const parsedTags = tags?.map((item) => item?.value);
                        const queryString = getQueryString();

                        const body = {
                            id: queryString?._id,
                            title: title,
                            content: content,
                            tags: parsedTags,
                        };

                        await updatePost(body);
                        navigate(`/post?_id=${queryString?._id}`);
                    } catch (error) {
                        console.error(error);
                    }
                    break;

                default:
                    break;
            }
        }
    };

    return (
        <S.MainWrapper onSubmit={onSubmitHandler}>
            <S.Header>
                <S.TitleInput
                    placeholder="제목을 입력해주세요!"
                    value={title}
                    defaultValue={pathname === "/post/edit" ? defaultPost?.title : ""}
                    onChange={(event: any) => {
                        setTitle(event?.target?.value);
                    }}
                />
                <Autocomplete
                    multiple
                    filterSelectedOptions
                    value={tags}
                    onChange={(event: any, newValue: any) => {
                        setTags(newValue);
                    }}
                    sx={{ maxWidth: "512px", width: "100%" }}
                    options={TAG_ITEMS}
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => (
                        <TextField {...params} label="관련 태그" placeholder="게시글과 관련된 태그를 추가해보세요!" />
                    )}
                />
            </S.Header>
            <S.Content>
                <Editor
                    apiKey={TINY_MCE_API_KEY}
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue={pathname === "/post/edit" ? defaultPost?.content : ""}
                    init={{
                        height: 500,
                        width: "100%",
                        menubar: false,
                        plugins: PLUGINS,
                        toolbar: EDIT_TOOLBAR,
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                />
            </S.Content>
            <S.Footer>
                <Button variant="outlined" size="large" type="button">
                    취소
                </Button>
                <Button variant="contained" size="large" type="submit">
                    {pathname === "/post/create" ? "게시" : "수정"}하기
                </Button>
            </S.Footer>
        </S.MainWrapper>
    );
};

export default PostCreate;
