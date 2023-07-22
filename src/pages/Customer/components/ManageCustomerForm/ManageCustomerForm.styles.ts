import { Box } from "@mui/material";
import { styled } from "styled-components";

// ————————————————————————————————————
//* ——— Main
// ————————————————————————————————————

export const MainWrapper = styled.form`
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    top: 50%;
    left: 50%;
    padding: 30px;
    width: 90%;
    gap: 20px;
    border: 1px solid #dadada;
    border-radius: 10px;
    background-color: #ffffff;
    transform: translate(-50%, -50%);
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const ContentWrapper = styled(Box)`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const FormWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    height: 80%;
    gap: 30px;
`;
