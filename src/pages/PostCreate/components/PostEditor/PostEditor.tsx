import { useState } from "react";

import axios from "axios";

import { Skeleton } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";

import { BASE_URL, EDIT_TOOLBAR, PLUGINS, TINY_MCE_API_KEY } from "../../../../constants/index";

interface IPostEditorType {
    editorRef: React.MutableRefObject<any>;
    pathname: string;
    defaultPost: any;
}

export const PostEditor = ({ editorRef, pathname, defaultPost }: IPostEditorType) => {
    const [isEditorLoad, setIsEditorLoad] = useState<boolean>(false);

    return (
        <>
            <Editor
                apiKey={TINY_MCE_API_KEY}
                onInit={(evt, editor) => (editorRef.current = editor)}
                onGetContent={() => {
                    setIsEditorLoad(true);
                }}
                initialValue={pathname === "/post/edit" ? defaultPost?.content : ""}
                init={{
                    height: 500,
                    width: "100%",
                    menubar: false,
                    plugins: PLUGINS,
                    toolbar: EDIT_TOOLBAR,
                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    images_upload_handler: (blobInfo) =>
                        new Promise((resolve, reject) => {
                            axios
                                .post(
                                    `${BASE_URL}/api/image/upload`,
                                    { image: blobInfo.blob() },
                                    {
                                        headers: { "Content-Type": "multipart/form-data" },
                                    },
                                )
                                .then((res: any) => {
                                    resolve(res?.data?.data?.path);
                                })
                                .catch((e) => {
                                    reject(e);
                                });
                        }),
                }}
            />
            {!isEditorLoad && <Skeleton variant="rounded" style={{ height: "300px", width: "100%" }} />}
        </>
    );
};
