import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 50px 20px;
    width: 100%;
    gap: 20px;
`;

export const PostListWrapper = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 50px 20px;
    height: 300px;
    width: 100%;
    gap: 20px;
    transition: all 0.1s ease;
    cursor: pointer;

    &:hover {
        background-color: #dadada40;
    }

    &:active {
        filter: brightness(0.8);
    }

    & > img {
        height: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 20px;
    }
`;

export const PostDetail = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    gap: 10px;

    .last-child {
        max-width: 100%;
        width: 100%;
        height: 4.3em;
        text-overflow: ellipsis;
        white-space: normal;
        overflow: hidden;
        text-align: start;
    }
`;

export const PostTagBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
