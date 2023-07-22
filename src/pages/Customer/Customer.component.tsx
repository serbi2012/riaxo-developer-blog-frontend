import { Button, MenuItem, Modal, Select, SelectChangeEvent, TextField } from "@mui/material";
import FilterForm from "../../components/FilterForm/FilterForm.component";
// import * as S from "./Customer.styles";
import * as L from "../../styles/commonLayoutStyles";
import * as T from "../../styles/TextGuide.styles";
import { useRef, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import { AgGridReact } from "ag-grid-react";
import { fetchCustomerList } from "../../api/customer.queries";
import { ICustomerHeaderButtonProps } from "./Customer.types";
import { GridApi, GridOptions, ICellRendererParams } from "ag-grid-community";
import { columnDefs, defaultColDef } from "./Customer.def";
import { rowData } from "./Customer.mock";
import ManageCustomerForm from "./components/ManageCustomerForm/ManageCustomerForm.component";

const HeaderButtons: ICustomerHeaderButtonProps[] = [
    // NOTE - 필요 버튼이 있을시 아래처럼 제작
    // { name: "저장", type: "success" },
];

const Customer: React.FC = () => {
    const [customerType, setCustomerType] = useState<string>(""); // 회원유형 상태값
    const [courier, setCourier] = useState<string>(""); // 택배사지정 상태값
    const [signUpDate, setSignUpDate] = useState<Dayjs | null>(dayjs()); // 회원가입일 상태값
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 모달 오픈 여부 상태값
    const [selectedCustomer, setSelectedCustomer] = useState<any>({}); // 모달 오픈 여부 상태값

    const gridApi = useRef<GridApi | null>(null);

    // NOTE - 회원유형 onChange 핸들러
    const handleCustomerTypeChange = (event: SelectChangeEvent<unknown>) => {
        setCustomerType(event.target.value as string);
    };

    // NOTE - 택배사지정 onChange 핸들러
    const handleCourierChange = (event: SelectChangeEvent) => {
        setCourier(event.target.value);
    };

    // NOTE - 초기화 입력시 실행될 로직 핸들러
    const handleOnReset = () => {
        console.log("필터 초기화 메서드 호출됨");
    };

    // NOTE - 검색하기 입력시 실행될 로직 핸들러
    const handleOnSubmit = () => {
        (async () => {
            const test = await fetchCustomerList();
            console.log("test:", test);
        })();

        console.log("필터 검색하기 메서드 호출됨");
    };

    const onGridReady = (params: GridOptions) => {
        if (params.api) {
            gridApi.current = params.api;
        }
    };

    const buttonRenderer = (value: ICellRendererParams) => {
        return (
            <Button
                variant="contained"
                color="success"
                size="small"
                sx={{ height: 24 }}
                onClick={() => {
                    setIsModalOpen(true);
                    clickButton(value);
                    setSelectedCustomer(value.data);
                }}
            >
                상세보기
            </Button>
        );
    };

    const clickButton = (value: ICellRendererParams) => {
        console.log("clickButton ~ value:", value);
    };

    const gridOptions = {
        components: {
            buttonRenderer: buttonRenderer,
        },
    };

    return (
        <L.MainWrapper>
            <Modal
                open={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ManageCustomerForm setIsOpen={setIsModalOpen} customerData={selectedCustomer} />
            </Modal>
            <FilterForm onReset={handleOnReset} onSubmit={handleOnSubmit}>
                <TextField label="회원명" variant="standard" />
                <TextField label="회원ID" variant="standard" />
                <TextField label="상호명" variant="standard" />
                <Select
                    labelId="select-standard-label"
                    value={customerType}
                    onChange={handleCustomerTypeChange}
                    label="분류유형"
                >
                    <MenuItem value="">
                        <em>없음</em>
                    </MenuItem>
                    <MenuItem value={"테스트1"}>테스트1</MenuItem>
                    <MenuItem value={"테스트2"}>테스트2</MenuItem>
                    <MenuItem value={"테스트3"}>테스트3</MenuItem>
                </Select>
                <DatePicker
                    label="회원가입일"
                    format="YYYY/M/D"
                    value={signUpDate}
                    onChange={(newValue) => setSignUpDate(newValue)}
                    sx={{ width: 167, color: "#fff" }}
                    slotProps={{ textField: { variant: "standard" } }}
                />
                <Select
                    labelId="select-standard-label"
                    value={courier}
                    onChange={handleCourierChange}
                    label="택배사지정"
                    sx={{
                        width: 167,
                    }}
                >
                    <MenuItem value="">
                        <em>없음</em>
                    </MenuItem>
                    <MenuItem value={"테스트1"}>테스트1</MenuItem>
                    <MenuItem value={"테스트2"}>테스트2</MenuItem>
                    <MenuItem value={"테스트3"}>테스트3</MenuItem>
                </Select>
            </FilterForm>

            <L.GridHeaderWrapper>
                <L.GridTitle>
                    <BlurOnIcon style={{ color: "red" }} fontSize="large" />
                    <T.Subtitle1>온라인 회원</T.Subtitle1>
                </L.GridTitle>
                <L.GridButtonWrapper>
                    {HeaderButtons.map((value, index) => {
                        return (
                            <Button type="button" variant="contained" color={value.type} key={index} size="small">
                                {value.name}
                            </Button>
                        );
                    })}
                </L.GridButtonWrapper>
            </L.GridHeaderWrapper>

            <div className="ag-theme-alpine" style={{ height: "100%", width: "100%" }}>
                <AgGridReact
                    defaultColDef={defaultColDef}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    suppressRowClickSelection
                    gridOptions={gridOptions}
                    onGridReady={onGridReady}
                    rowHeight={30}
                ></AgGridReact>
            </div>
        </L.MainWrapper>
    );
};

export default Customer;
