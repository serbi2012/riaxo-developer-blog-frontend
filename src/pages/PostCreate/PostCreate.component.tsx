// import { T } from "../../styles/TextGuide.styles";
import * as S from "./PostCreate.styles";
import { Autocomplete, Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { TINY_MCE_API_KEY } from "../../constants/API";

const TAG_ITEMS = [
    { label: "Dev", value: "Dev" },
    { label: "React", value: "React" },
    { label: "NodeJS", value: "NodeJS" },
];

const PLUGINS = [
    "advlist",
    "autolink",
    "lists",
    "link",
    "image",
    "charmap",
    "print",
    "preview",
    "anchor",
    "searchreplace",
    "visualblocks",
    "code",
    "fullscreen",
    "insertdatetime",
    "media",
    "table",
    "paste",
    "code",
    "help",
    "wordcount",
    "save",
];
const EDIT_TOOLBAR =
    "formatselect fontselect fontsizeselect fontsize |" +
    " forecolor backcolor |" +
    " bold italic underline strikethrough |" +
    " alignjustify alignleft aligncenter alignright |" +
    " bullist numlist |" +
    " table tabledelete |" +
    " link image";

const PostCreate: React.FC = () => {
    const [editorResult, setEditorResult] = useState<any>("");

    const editorRef = useRef<any>(null);

    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
            setEditorResult(editorRef.current.getContent());
        }
    };

    const onSubmitHandler = (event: any) => {
        event?.preventDefault();
    };

    return (
        <S.MainWrapper onSubmit={onSubmitHandler}>
            <S.Header>
                <TextField placeholder="게시글의 제목을 입력해주세요!" sx={{ width: "100%" }} />
                <Autocomplete
                    multiple
                    filterSelectedOptions
                    sx={{ minWidth: "30vw", width: "50%" }}
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
                    init={{
                        height: 500,
                        width: "100%",
                        menubar: false,
                        plugins: PLUGINS,
                        toolbar: EDIT_TOOLBAR,
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                />
                <div dangerouslySetInnerHTML={{ __html: editorResult }} />
            </S.Content>
            <S.Footer>
                <Button variant="outlined" size="large" type="submit" onClick={log}>
                    게시하기
                </Button>
            </S.Footer>
        </S.MainWrapper>
    );
};

export default PostCreate;
