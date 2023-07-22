import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, FormControl, InputLabel, ThemeProvider } from "@mui/material";
import * as S from "./FilterForm.styles";
import * as T from "../../styles/TextGuide.styles";
import { IFilterFormProps } from "./FilterForm.type";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import "dayjs/locale/ko";
import dayjs from "dayjs";
import { useRecoilState } from "recoil";
import { collapsedState } from "../../recoil/atoms";

const FilterForm: React.FC<IFilterFormProps> = ({ onSubmit, onReset, children }: IFilterFormProps) => {
    const [collapsed] = useRecoilState<boolean>(collapsedState);

    const [isFold, setIsFold] = useState<boolean>(false);

    // NOTE - react hook form에서 가져온 훅
    const { handleSubmit, reset, control } = useForm();

    // NOTE - form에서 submit 이벤트 발생시 로직
    const handleOnSubmit = (data: any) => {
        console.log("handleOnSubmit ~ data:", data);
        onSubmit && onSubmit(data);
    };

    // NOTE - 초기화시 로직
    const handleOnReset = () => {
        reset();
        onReset?.();
    };

    return (
        <ThemeProvider theme={S.theme}>
            {/* SECTION - MUI DatePicker 지역 설정 관련 Provider */}
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                {/* SECTION - 메인 Wrapper */}
                <S.MainWrapper isFold={isFold}>
                    <S.FoldBox
                        isFold={isFold}
                        collapsed={collapsed}
                        onClick={() => {
                            setIsFold(!isFold);
                        }}
                    >
                        <S.ArrowIcon isFold={isFold} />
                        <T.Subtitle1>검색 {isFold ? "펼치기" : "접기"}</T.Subtitle1>
                    </S.FoldBox>
                    {/* SECTION - Form 컨테이너 */}
                    <S.FormContainer onSubmit={handleSubmit(handleOnSubmit)} isFold={isFold}>
                        {/* SECTION - Input 컨테이너 */}
                        <S.InputContainer>
                            {React.Children.map(children, (child: any, index) => {
                                if (child?.type?.muiName === "Select") {
                                    return (
                                        // NOTE - children가 Select일 경우 FormControl로 감싸기
                                        <FormControl variant="standard" sx={{ width: 167 }}>
                                            <InputLabel id="select-standard-label">{child.props.label}</InputLabel>
                                            <Controller
                                                name={`field${index}`}
                                                control={control}
                                                defaultValue=""
                                                render={({ field }) => React.cloneElement(child, field)}
                                            />
                                        </FormControl>
                                    );
                                } else {
                                    return (
                                        // NOTE - children을 Controller로 감싸기
                                        <Controller
                                            name={`field${index}`}
                                            control={control}
                                            defaultValue={child?.props?.format ? dayjs() : ""} // 타입이 텍스트가 아닌 Date일경우 분기처리
                                            render={({ field }) => React.cloneElement(child, field)}
                                        />
                                    );
                                }
                            })}
                        </S.InputContainer>

                        {/* SECTION - Button 박스 */}
                        <S.ButtonBox>
                            <Button type="submit" variant="contained">
                                검색하기
                            </Button>
                            <Button type="button" onClick={handleOnReset} variant="contained">
                                초기화
                            </Button>
                        </S.ButtonBox>
                    </S.FormContainer>
                </S.MainWrapper>
            </LocalizationProvider>
        </ThemeProvider>
    );
};

export default FilterForm;
