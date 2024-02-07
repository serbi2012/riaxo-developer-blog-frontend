import { styled } from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 30px);
`;

export const UpDownGridHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
`;

export const GridHeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    min-height: 50px;
    align-items: center;
    justify-content: space-between;
    align-items: center;
`;

export const GridTitle = styled.div`
    display: flex;
    padding: 0px 10px;
    align-items: center;
    gap: 5px;

    & > svg {
        width: 25px;
    }
`;

export const GridButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-right: 10px;

    & > button {
        margin-left: 10px;
    }
`;
