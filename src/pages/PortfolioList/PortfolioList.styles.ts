import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 50px 20px;
    width: 100%;
    gap: 20px;
`;

export const PostListWrapper = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 50px 20px;
    width: 482px;
    gap: 20px;
    border-radius: 20px;
    box-shadow:
        15px 15px 15px -10px rgba(0, 0, 0, 0.15),
        inset 7px 7px 10px rgba(255, 255, 255, 0.75),
        -7px -7px 10px rgba(255, 255, 255, 0.55),
        inset -1px -1px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.1s ease;

    &:hover {
        background-color: var(--color-border-gray2) 40;
    }

    &:active {
        filter: brightness(0.8);
    }

    & > img {
        width: 100%;
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
