import { TextField } from "@mui/material";
import FilterForm from "../../components/FilterForm/FilterForm.component";
import { AgGridReact } from "ag-grid-react";
import { rowData } from "./Sample.mock";
import { columnDefs, defaultColDef } from "./Sample.def";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Button } from "@mui/material";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import * as T from "../../styles/TextGuide.styles";
import { useRef } from "react";
import {
    CellClickedEvent,
    CellValueChangedEvent,
    GridApi,
    GridOptions,
    ICellRendererParams,
    IRowNode,
    RowSelectedEvent,
} from "ag-grid-community";
import * as L from "../../styles/commonLayoutStyles";

const Sample: React.FC = () => {
    const gridApi = useRef<GridApi | null>(null);
    const gridRef = useRef<AgGridReact<any> | null>(null);

    const onGridReady = (params: GridOptions) => {
        if (params.api) {
            gridApi.current = params.api;
        }
    };

    const clickSave = () => {
        if (gridApi.current) {
            gridApi.current.stopEditing();
            const selectedNodes = gridApi.current.getSelectedNodes();
            const selectedData = selectedNodes.map((node) => node.data);
            console.log(gridApi.current.getSelectedNodes());
            console.log(gridApi.current.getSelectedRows());
            selectedData;
        }
    };

    const buttonRenderer = (value: ICellRendererParams) => {
        console.log(value);
    };

    const onCellClicked = (params: CellClickedEvent) => {
        console.log(params);
    };

    const cellValueChanged = (event: CellValueChangedEvent) => {
        console.log(event);
        if (event.data.transaction !== "add") {
            event.node.setData({ ...event.data, transaction: "update" });
        }
    };

    const onRowSelected = (event: RowSelectedEvent) => {
        console.log(event);
    };

    const clickUpdate = () => {
        const dataArray: IRowNode[] = [];
        gridApi.current?.forEachNode((node) => dataArray.push(node));
    };

    const addRow = () => {
        gridApi.current?.applyTransaction({ add: [{ transaction: "add" }] });
    };

    const deleteRows = () => {
        const deleteRows = gridApi.current?.getSelectedRows();
        gridApi.current?.applyTransaction({ remove: deleteRows });
    };

    return (
        <L.MainWrapper>
            <FilterForm>
                <TextField id="standard-basic" label="회원명" variant="standard" />
                <TextField id="standard-basic" label="회원명" variant="standard" />
            </FilterForm>
            <L.GridHeaderWrapper>
                <L.GridTitle>
                    <BlurOnIcon style={{ color: "red" }} fontSize="large" />
                    <T.Subtitle1>Simple Data Grid</T.Subtitle1>
                </L.GridTitle>
                <L.GridButtonWrapper>
                    <Button type="button" variant={"contained"} color="success" onClick={clickSave} size="small">
                        저장
                    </Button>
                    <Button type="button" variant={"contained"} color="primary" onClick={clickUpdate} size="small">
                        수정
                    </Button>
                    <Button type="button" variant={"contained"} color="secondary" size="small">
                        상세보기
                    </Button>
                    <Button type="button" variant={"contained"} color="error" onClick={deleteRows} size="small">
                        삭제
                    </Button>
                    <Button type="button" variant={"contained"} color="warning" size="small">
                        팝업열기
                    </Button>
                    <Button type="button" variant={"contained"} color="warning" size="small" onClick={addRow}>
                        추가
                    </Button>
                </L.GridButtonWrapper>
            </L.GridHeaderWrapper>
            <div className="ag-theme-alpine" style={{ height: "100%", width: "100%" }}>
                <AgGridReact
                    ref={gridRef}
                    onCellClicked={onCellClicked}
                    onCellValueChanged={cellValueChanged}
                    onRowSelected={onRowSelected}
                    gridOptions={{
                        rowData: rowData,
                        defaultColDef: defaultColDef,
                        columnDefs: columnDefs,
                        rowSelection: "multiple",
                        rowHeight: 30,
                        onGridReady: onGridReady,
                        suppressRowClickSelection: true,
                        singleClickEdit: true,
                        components: {
                            buttonRenderer: buttonRenderer,
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
                    }}
                ></AgGridReact>
            </div>
        </L.MainWrapper>
    );
};

export default Sample;
