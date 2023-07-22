import { ColDef } from "ag-grid-community/dist/lib/main";

// 컬럼별 공통 설정
export const defaultColDef = {
    flex: 1,
    minWidth: 200,
    resizable: true,
    sortable: true,
    filter: true,
};

// 첫 번째 열에 체크박스를 표시하는 컬럼 설정
const checkboxColumn = {
    flex: 0,
    minWidth: 50,
    headerName: "",
    width: 50,
    checkboxSelection: true,
    headerCheckboxSelection: true,
};

// 컬럼 설정
export const columnDefs: ColDef[] = [
    checkboxColumn,
    { field: "brand", cellDataType: "text" },
    { field: "name", cellDataType: "text" },
    { field: "capacity", cellDataType: "number", editable: true },
    { field: "price", cellDataType: "number", editable: true },
    { field: "date", cellDataType: "date", editable: true },
];
