import { styled } from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    margin-bottom: 10px;
`;

export const TagsWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 10px;
`;

export const TagsBox = styled.div<{ isFoldMode: boolean }>`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: ${({ isFoldMode }) => (isFoldMode ? "wrap" : "nowrap")};
    flex: 1;
    padding: 10px 0px;
    gap: 10px;
    overflow-x: ${({ isFoldMode }) => (isFoldMode ? "auto" : "scroll")};
`;
