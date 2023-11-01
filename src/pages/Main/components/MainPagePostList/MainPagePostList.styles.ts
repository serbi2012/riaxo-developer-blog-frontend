import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;

export const PostWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;

export const PostItem = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    gap: 5px;
    border-radius: 10px;
    border: 1px solid #dadada;
    transition: all ease 0.2s;

    p > {
        max-width: 100%;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-align: start;
    }

    &:hover {
        background-color: #dadada40;
        scale: 1.02;
        cursor: pointer;
    }

    &:active {
        filter: brightness(0.8);
    }
`;
