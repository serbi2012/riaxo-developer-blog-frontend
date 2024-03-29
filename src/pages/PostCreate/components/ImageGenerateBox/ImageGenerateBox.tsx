import { useState } from "react";

import { useSnackbar } from "notistack";

import AddBoxIcon from "@mui/icons-material/AddBox";
import { CircularProgress, IconButton, Paper } from "@mui/material";

import { createAiImage } from "../../../../api";
import * as S from "./ImageGenerateBox.styles";

interface PropsType {
    setImage: (value: any) => void;
}

export const ImageGenerateBox = ({ setImage }: PropsType) => {
    const [aiImages, setAiImages] = useState<any[]>([]);
    const [aiImageInput, setAiImageInput] = useState<string>("");
    const [isAiLoading, setIsAiLoading] = useState<boolean>(false);

    const { enqueueSnackbar } = useSnackbar();

    const handleOnCreateAiImage = async () => {
        try {
            setIsAiLoading(true);

            const response = await createAiImage({ content: aiImageInput });

            setAiImages([...aiImages, response?.imageUrl]);
        } catch (error: any) {
            enqueueSnackbar(error.message, { variant: "error" });
            console.error(error);
        } finally {
            setIsAiLoading(false);
        }
    };

    return (
        <S.MainWrapper>
            <Paper
                component="form"
                sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    border: "1px solid var(--color-border-gray1)",
                    boxShadow: "none",
                }}
            >
                <S.SearchInput
                    placeholder="검색어를 입력해주세요."
                    value={aiImageInput}
                    onChange={(event) => {
                        setAiImageInput(event?.target.value);
                    }}
                />
                <IconButton type="button" sx={{ p: "10px" }} disabled={isAiLoading} onClick={handleOnCreateAiImage}>
                    <AddBoxIcon />
                    {isAiLoading && (
                        <CircularProgress
                            size={40}
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                marginTop: "-20px",
                                marginLeft: "-20px",
                            }}
                        />
                    )}
                </IconButton>
            </Paper>
            <S.GeneratedImageBox>
                {aiImages?.length <= 0 && <S.NoImageText>생성된 이미지가 없습니다.</S.NoImageText>}
                {aiImages?.map((item, index) => (
                    <S.AiImage
                        key={index}
                        src={item || ""}
                        onClick={() => {
                            setImage(item || "");
                        }}
                    />
                ))}
            </S.GeneratedImageBox>
        </S.MainWrapper>
    );
};
