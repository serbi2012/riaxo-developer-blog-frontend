import { TextField } from "@mui/material";
import FilterForm from "../../components/FilterForm/FilterForm.component";
import { AgGridReact } from "ag-grid-react";
import { rowData } from "./Sample2.mock";
import { columnDefs, defaultColDef } from "./Sample2.def";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Button } from "@mui/material";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import * as T from "../../styles/TextGuide.styles";
import { useRef, useState } from "react";
import { CellValueChangedEvent, GridApi, GridOptions, ICellRendererParams } from "ag-grid-community";
import * as L from "../../styles/commonLayoutStyles";
import * as S from "./Sample2.styles";

const Sample2: React.FC = () => {
    const [data] = useState(rowData);

    const UpperGridApi = useRef<GridApi | null>(null);
    const BottomGridApi = useRef<GridApi | null>(null);
    const BottomGridRef = useRef<AgGridReact<any> | null>(null);

    const onUpperGridReady = (params: GridOptions) => {
        if (params.api) {
            UpperGridApi.current = params.api;
        }
    };
    const onBottomGridReady = (params: GridOptions) => {
        if (params.api) {
            BottomGridApi.current = params.api;
        }
    };

    const clickUpperSave = () => {
        if (UpperGridApi.current) {
            UpperGridApi.current.stopEditing();
            const selectedNodes = UpperGridApi.current.getSelectedNodes();
            const selectedData = selectedNodes.map((node) => node.data);
            console.log(selectedData);
        }
    };

    const clickBottomSave = () => {
        if (BottomGridApi.current) {
            BottomGridApi.current.stopEditing();
            const selectedNodes = BottomGridApi.current.getSelectedNodes();
            const selectedData = selectedNodes.map((node) => node.data);

            console.log(selectedData);
        }
    };

    const onSelectionChanged = () => {
        const selectedRows = UpperGridApi.current?.getSelectedRows();
        console.log(selectedRows);
    };

    const ImageRenderer = (value: ICellRendererParams) => {
        if (value.data.image) {
            return (
                <img
                    onClick={() => {
                        clickImage(value);
                    }}
                    style={{ height: "100%" }}
                    src={value.data.image}
                    alt="Image"
                />
            );
        } else {
            return null;
        }
    };

    const buttonRendererUpperGrid = (value: ICellRendererParams) => {
        return (
            <S.ButtonWrapper>
                <Button
                    name="button1"
                    type="button"
                    variant={value.data.button1 ? "contained" : "outlined"}
                    color="success"
                    size="small"
                    onClick={() => {
                        clickButtonUpperGrid(value, "button1");
                    }}
                >
                    버튼1
                </Button>
                <Button
                    name="button2"
                    type="button"
                    variant={value.data.button2 ? "contained" : "outlined"}
                    color="warning"
                    size="small"
                    onClick={() => {
                        clickButtonUpperGrid(value, "button2");
                    }}
                >
                    버튼2
                </Button>
                <Button
                    name="button3"
                    type="button"
                    variant={value.data.button3 ? "contained" : "outlined"}
                    color="primary"
                    size="small"
                    onClick={() => {
                        clickButtonUpperGrid(value, "button3");
                    }}
                >
                    버튼3
                </Button>
            </S.ButtonWrapper>
        );
    };

    const buttonRendererBottomGrid = (value: ICellRendererParams) => {
        return (
            <S.ButtonWrapper>
                <Button
                    name="button1"
                    type="button"
                    variant={value.data.button1 ? "contained" : "outlined"}
                    color="success"
                    size="small"
                    onClick={() => {
                        clickButtonBottomGrid(value, "button1");
                    }}
                >
                    버튼1
                </Button>
                <Button
                    name="button2"
                    type="button"
                    variant={value.data.button2 ? "contained" : "outlined"}
                    color="warning"
                    size="small"
                    onClick={() => {
                        clickButtonBottomGrid(value, "button2");
                    }}
                >
                    버튼2
                </Button>
                <Button
                    name="button3"
                    type="button"
                    variant={value.data.button3 ? "contained" : "outlined"}
                    color="primary"
                    size="small"
                    onClick={() => {
                        clickButtonBottomGrid(value, "button3");
                    }}
                >
                    버튼3
                </Button>
            </S.ButtonWrapper>
        );
    };

    const clickButtonUpperGrid = (params: ICellRendererParams, buttonType: string) => {
        params.data.capacity = 9999;
        params.data[buttonType] = !params.data[buttonType];
        params.node.setData(params.data);
    };

    const clickButtonBottomGrid = (params: ICellRendererParams, buttonType: string) => {
        params.data.capacity = 9999;
        params.data[buttonType] = !params.data[buttonType];
        params.node.setData(params.data);
    };

    const onCellValueChanged = (params: CellValueChangedEvent) => {
        const transaction: any = {
            add: [],
            remove: [],
            update: [],
        };

        if (params.newValue !== params.oldValue) {
            if (params.newValue === "") {
                params.data.transaction = "remove";
                transaction.remove.push(params.data);
            } else if (params.oldValue === "") {
                params.data.transaction = "add";
                transaction.add.push(params.data);
            } else {
                params.data.transaction = "update";
                transaction.update.push(params.data);
            }

            console.log("Transaction:", transaction);
            params.api.applyTransaction(transaction);
        }
    };

    const upperGridOptions = {
        components: {
            imageRenderer: ImageRenderer,
            buttonRenderer: buttonRendererUpperGrid,
        },
    };

    const bottomGridOptions = {
        components: {
            imageRenderer: ImageRenderer,
            buttonRenderer: buttonRendererBottomGrid,
        },
        getRowStyle: (params: any) => {
            if (params.data.transaction === "add") {
                return { backgroundColor: "green" };
            } else if (params.data.transaction === "remove") {
                return { backgroundColor: "red" };
            } else if (params.data.transaction === "update") {
                return { backgroundColor: "yellow" };
            }
        },
    };

    const clickImage = (value: ICellRendererParams) => {
        console.log(value.data);
    };

    return (
        <L.MainWrapper>
            <FilterForm>
                <TextField id="standard-basic" label="회원명" variant="standard" />
                <TextField id="standard-basic" label="회원명" variant="standard" />
            </FilterForm>

            <L.UpDownGridHeader>
                <L.GridHeaderWrapper>
                    <L.GridTitle>
                        <BlurOnIcon style={{ color: "red" }} fontSize="large" />
                        <T.H1>Simple Data Upper Grid</T.H1>
                    </L.GridTitle>
                    <L.GridButtonWrapper>
                        <Button type="button" variant={"contained"} color="success" onClick={clickUpperSave}>
                            저장
                        </Button>
                        <Button type="button" variant={"contained"} color="primary">
                            수정
                        </Button>
                        <Button type="button" variant={"contained"} color="secondary">
                            상세보기
                        </Button>
                        <Button type="button" variant={"contained"} color="error">
                            삭제
                        </Button>
                        <Button type="button" variant={"contained"} color="warning">
                            팝업열기
                        </Button>
                    </L.GridButtonWrapper>
                </L.GridHeaderWrapper>
                <div className="ag-theme-alpine" style={{ height: "46%", width: "100%" }}>
                    <AgGridReact
                        defaultColDef={defaultColDef}
                        rowSelection="single"
                        rowData={data}
                        columnDefs={columnDefs}
                        suppressRowClickSelection={true}
                        singleClickEdit={true}
                        onGridReady={onUpperGridReady}
                        onSelectionChanged={onSelectionChanged}
                        gridOptions={upperGridOptions}
                    ></AgGridReact>
                </div>

                <L.GridHeaderWrapper>
                    <L.GridTitle>
                        <BlurOnIcon style={{ color: "red" }} fontSize="large" />
                        <T.H1>Simple Data Bottom Grid</T.H1>
                    </L.GridTitle>
                    <L.GridButtonWrapper>
                        <Button type="button" variant={"contained"} color="success" onClick={clickBottomSave}>
                            저장
                        </Button>
                        <Button type="button" variant={"contained"} color="primary">
                            수정
                        </Button>
                        <Button type="button" variant={"contained"} color="secondary">
                            상세보기
                        </Button>
                        <Button type="button" variant={"contained"} color="error">
                            삭제
                        </Button>
                        <Button type="button" variant={"contained"} color="warning">
                            팝업열기
                        </Button>
                    </L.GridButtonWrapper>
                </L.GridHeaderWrapper>
                <div className="ag-theme-alpine" style={{ height: "46%", width: "100%" }}>
                    <AgGridReact
                        ref={BottomGridRef}
                        defaultColDef={defaultColDef}
                        rowSelection="multiple"
                        rowData={data}
                        columnDefs={columnDefs}
                        suppressRowClickSelection={true}
                        singleClickEdit={true}
                        onGridReady={onBottomGridReady}
                        onCellValueChanged={onCellValueChanged}
                        gridOptions={bottomGridOptions}
                    ></AgGridReact>
                </div>
            </L.UpDownGridHeader>
        </L.MainWrapper>
    );
};

export default Sample2;
