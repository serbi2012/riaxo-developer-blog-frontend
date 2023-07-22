import { ColDef } from "ag-grid-community/dist/lib/main";

// 컬럼별 공통 설정
export const defaultColDef = {
    flex: 1,
    // minWidth: 200,
    resizable: true,
    sortable: true,
    filter: true,
};

// 컬럼 설정
export const columnDefs: ColDef[] = [
    { field: "rownum", headerName: "No", cellDataType: "number", maxWidth: 80 },
    { field: "분류유형", cellDataType: "text" },
    { field: "name", headerName: "고객명", cellDataType: "text" },
    { field: "아이디", cellDataType: "text" },
    { field: "상호명", cellDataType: "text" },
    { field: "주소", cellDataType: "text", minWidth: 300, editable: true },
    { field: "연락처", cellDataType: "text" },
    {
        field: "회원가입일",
        cellDataType: "datetime",
        minWidth: 200,
        valueFormatter: (params) => {
            const date = new Date(params.value);
            return date.toLocaleString();
        },
    },
    {
        field: "상세보기",
        cellDataType: "object",
        editable: false,
        cellRenderer: "buttonRenderer",
        filter: false,
        floatingFilter: false,
        cellClass: "center-align",
    },
];
