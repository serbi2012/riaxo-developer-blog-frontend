import styled from "styled-components";
import { T } from "../../../../styles/TextGuide.styles";
import { InputBase } from "@mui/material";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    width: 64%;
    gap: 5px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const GeneratedImageBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 10px 0px;
    gap: 10px;
    overflow-x: scroll;
`;

export const SearchInput = styled(InputBase)`
    flex: 1;
`;

export const NoImageText = styled(T.Title1)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    font-size: clamp(5px, 4vmin, 30px);
    line-height: clamp(11px, 6vmin, 36px);
`;

export const AiImage = styled.img`
    min-height: 100px;
    max-height: 100px;
    min-width: 200px;
    max-width: 200px;
    object-fit: cover;
    cursor: pointer;
`;
