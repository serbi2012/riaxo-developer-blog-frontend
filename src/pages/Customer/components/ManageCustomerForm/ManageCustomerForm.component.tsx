import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import * as S from "./ManageCustomerForm.styles";
import * as T from "../..//../../styles/TextGuide.styles";
import { useEffect, useState } from "react";
import { IManageCustomerFormProps } from "./ManageCustomerForm.types";
import { useForm } from "react-hook-form";

const ManageCustomerForm: React.FC<IManageCustomerFormProps> = ({
    onSubmit,
    setIsOpen,
    customerData,
}: IManageCustomerFormProps) => {
    const [customerType, setCustomerType] = useState<string>(customerData?.분류유형); // 회원유형 상태값
    const [courier, setCourier] = useState<string>(""); // 택배사지정 상태값

    // NOTE - 회원유형 onChange 핸들러
    const handleCustomerTypeChange = (event: SelectChangeEvent<unknown>) => {
        setCustomerType(event.target.value as string);
    };

    // NOTE - 택배사지정 onChange 핸들러
    const handleCourierChange = (event: SelectChangeEvent) => {
        setCourier(event.target.value);
    };

    // NOTE - react hook form에서 가져온 훅
    const { handleSubmit } = useForm();

    // NOTE - form에서 submit 이벤트 발생시 로직
    const handleOnSubmit = (data: any) => {
        console.log("handleOnSubmit ~ data:", data);
        onSubmit && onSubmit(data);
    };

    // NOTE - 모달 닫기
    const handleOnClose = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        console.log("useEffect ~ customerData:", customerData);
    }, [customerData]);

    return (
        <S.MainWrapper onSubmit={handleSubmit(handleOnSubmit)}>
            <S.Header>
                <T.Subtitle1>온라인 회원 관리</T.Subtitle1>
                <S.ButtonWrapper>
                    <Button type="submit" variant="contained">
                        수정
                    </Button>
                    <Button type="button" onClick={handleOnClose} variant="contained">
                        닫기
                    </Button>
                </S.ButtonWrapper>
            </S.Header>
            <S.ContentWrapper>
                <T.Body1>{customerData.고객명}님의 회원 정보</T.Body1>
                <S.FormWrapper>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={2}>
                            <FormControl variant="standard" fullWidth>
                                <InputLabel id="select-standard-label">회원분류</InputLabel>
                                <Select
                                    labelId="select-standard-label"
                                    value={customerType}
                                    onChange={handleCustomerTypeChange}
                                    label="회원분류"
                                >
                                    <MenuItem value="">
                                        <em>없음</em>
                                    </MenuItem>
                                    <MenuItem value={"테스트1"}>테스트1</MenuItem>
                                    <MenuItem value={"테스트2"}>테스트2</MenuItem>
                                    <MenuItem value={"테스트3"}>테스트3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <FormControl variant="standard" fullWidth>
                                <InputLabel id="select-standard-label">택배사지정</InputLabel>
                                <Select
                                    labelId="select-standard-label"
                                    value={courier}
                                    onChange={handleCourierChange}
                                    label="택배사지정"
                                >
                                    <MenuItem value="">
                                        <em>없음</em>
                                    </MenuItem>
                                    <MenuItem value={"테스트1"}>테스트1</MenuItem>
                                    <MenuItem value={"테스트2"}>테스트2</MenuItem>
                                    <MenuItem value={"테스트3"}>테스트3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <TextField
                                label="고객명"
                                variant="standard"
                                fullWidth
                                defaultValue={customerData?.고객명}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <TextField
                                label="아이디"
                                variant="standard"
                                fullWidth
                                defaultValue={customerData?.아이디}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <TextField
                                label="상호명"
                                variant="standard"
                                fullWidth
                                defaultValue={customerData?.상호명}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <TextField label="회원구분" variant="standard" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <TextField label="사업자구분" variant="standard" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <TextField label="사업자분류" variant="standard" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <TextField
                                label="연락처"
                                variant="standard"
                                fullWidth
                                defaultValue={customerData?.연락처}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField label="이메일" variant="standard" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <TextField label="가입경로" variant="standard" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <TextField
                                label="회원가입일"
                                variant="standard"
                                fullWidth
                                defaultValue={customerData?.회원가입일}
                            />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <TextField label="앱설치여부" variant="standard" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <TextField label="주소" variant="standard" fullWidth defaultValue={customerData?.주소} />
                        </Grid>
                    </Grid>
                </S.FormWrapper>
            </S.ContentWrapper>
        </S.MainWrapper>
    );
};

export default ManageCustomerForm;
