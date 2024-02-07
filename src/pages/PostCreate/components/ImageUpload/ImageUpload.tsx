import React, { useEffect, useRef, useState } from "react";
import { Cropper, ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import * as S from "./ImageUpload.styles";
import { useImageCompress } from "./hooks/useImageCompress";
import { dataURItoFile } from "../../../../utils/dataURItoFile";
import { T } from "../../../../styles/TextGuide.styles";
import { Button } from "@mui/material";

interface PropsType {
    aspectRatio?: number;
    setImage: (value: any) => void;
    defaultImage?: any;
}

export const ProfileImgUpload: React.FC<PropsType> = ({ aspectRatio = 1, setImage, defaultImage }: PropsType) => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [uploadImage, setUploadImage] = useState<string | null>(null);
    const [compressedImage, setCompressedImage] = useState<string | null>(null);

    const inputRef = useRef<HTMLInputElement>(null);
    const cropperRef = useRef<ReactCropperElement>(null);

    const { isLoading: isCompressLoading, compressImage } = useImageCompress();

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleUploadImage = (image: string) => {
        void (async () => {
            setUploadImage(image);
        })();
    };

    const handleCompressImage = async () => {
        if (!uploadImage) return;

        const imageFile = dataURItoFile(uploadImage);

        const compressedImage = await compressImage(imageFile);

        if (!compressedImage) return;
        const imageUrl = URL.createObjectURL(compressedImage);
        setCompressedImage(imageUrl);
    };

    useEffect(() => {
        if (uploadImage) {
            void handleCompressImage();
        }
    }, [uploadImage]);

    useEffect(() => {
        setCompressedImage(defaultImage);
    }, [defaultImage]);

    const handleChildrenClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
            openModal();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const files = e.target.files;

        if (!files || files.length === 0) return;

        const reader = new FileReader();

        reader.onload = () => {
            setUploadImage(reader.result as string);
        };
        reader.readAsDataURL(files[0]);

        if (e.target?.value) {
            e.target.value = "";
        }
    };

    const getCropData = () => {
        (async () => {
            if (typeof cropperRef.current?.cropper !== "undefined") {
                const imageToUpload = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
                const parsedImage = dataURItoFile(imageToUpload);

                handleUploadImage(imageToUpload);
                setImage(parsedImage);
            }
        })();
    };

    return (
        <S.MainWrapper>
            <S.ImageContainer>
                <input type="file" ref={inputRef} style={{ display: "none" }} onChange={handleFileChange} />
                {compressedImage && compressedImage !== "deleted" ? (
                    <S.ProfileImg src={compressedImage} />
                ) : (
                    <S.LoadingText>{isCompressLoading ? "이미지 압축 중.." : "이미지가 없습니다."}</S.LoadingText>
                )}

                {uploadImage && (
                    <S.ModalBox
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        appElement={document.body}
                        style={{ overlay: { zIndex: 10000 } }}
                    >
                        <S.ModalCloseButton onClick={closeModal}>
                            <T.Subtitle1>&times;</T.Subtitle1>
                        </S.ModalCloseButton>
                        <S.ModalContent>
                            <h1>이미지 편집</h1>
                            <Cropper
                                ref={cropperRef}
                                aspectRatio={aspectRatio}
                                src={uploadImage ?? ""}
                                viewMode={1}
                                width={708}
                                height={500}
                                background={false}
                                responsive
                                autoCropArea={1}
                                checkOrientation={true}
                                guides
                            />
                            <S.ModalFooter>
                                <Button onClick={getCropData}>자르기</Button>
                                <Button
                                    onClick={() => {
                                        getCropData();
                                        closeModal();
                                    }}
                                >
                                    확인
                                </Button>
                            </S.ModalFooter>
                        </S.ModalContent>
                    </S.ModalBox>
                )}
            </S.ImageContainer>
            <S.ImageControlBox>
                <T.Body2 onClick={handleChildrenClick}>이미지 업로드</T.Body2>
                <T.Body2
                    onClick={() => {
                        setUploadImage(null);
                        setCompressedImage(null);
                        setImage("deleted");
                    }}
                >
                    이미지 삭제
                </T.Body2>
            </S.ImageControlBox>
        </S.MainWrapper>
    );
};
