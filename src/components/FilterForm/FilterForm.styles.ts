import { styled } from "styled-components";
import { filterTheme, globalTheme } from "../../styles/theme.styles";
import { createTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Subtitle1 } from "../../styles/TextGuide.styles";

// ————————————————————————————————————
//* ——— Theme
// ————————————————————————————————————

export const theme = createTheme({
    ...globalTheme,
    ...filterTheme,
});

// ————————————————————————————————————
//* ——— Main
// ————————————————————————————————————

export const MainWrapper = styled.div<{ isFold?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 30px;
    padding-top: ${({ isFold }) => (isFold ? "20px" : "40px")};
    height: ${({ isFold }) => (isFold ? "10px" : "auto")};
    width: 100%;
    background-color: #1d2d5a;
`;

export const FormContainer = styled.form<{ isFold?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    visibility: ${({ isFold }) => (isFold ? "hidden" : "visible")};
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    width: 80%;

    .MuiFormControl-root {
        margin: 0;
    }

    .MuiInput-input {
        color: #fff;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`;

export const FoldBox = styled.div<{ isFold?: boolean; collapsed?: boolean }>`
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    top: 35px;
    left: ${({ collapsed }) => (collapsed ? "83px" : "258px")};
    padding-right: 6px;
    color: white;
    gap: 5px;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
        background-color: #dadada30;
        transition: all 0.1s ease;
    }

    &:active {
        filter: brightness(0.95);
    }

    & > ${Subtitle1} {
        color: #fff;
    }
`;

export const ArrowIcon = styled(KeyboardArrowDownIcon)<{ isFold?: boolean }>`
    color: white;
    transform: ${({ isFold }) => (isFold ? "rotate(0deg)" : "rotate(180deg)")};
    transition: all 0.1s ease;
    user-select: none;
    cursor: pointer;
`;
