import { InputBase } from "@mui/material";
import { styled } from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 10px;
    margin-bottom: 10px;
`;

export const SearchInput = styled(InputBase)`
    flex: 1;
`;
