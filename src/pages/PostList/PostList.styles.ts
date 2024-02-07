import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { fadeInKeyframes } from "../../styles/animationStyles";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 50px 20px;
    width: 100%;
    gap: 10px;

    @media (max-width: 768px) {
        align-items: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
    }
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
    animation: ${fadeInKeyframes} 0.3s ease forwards;

    &:hover {
        background-color: var(--color-border-gray3);
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

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        width: 47.7%;
        border-radius: 20px;
        box-shadow:
            15px 15px 15px -10px rgba(0, 0, 0, 0.15),
            inset 7px 7px 10px rgba(255, 255, 255, 0.75),
            -7px -7px 10px rgba(255, 255, 255, 0.55),
            inset -1px -1px 5px rgba(0, 0, 0, 0.2);

        & > img {
            width: 100%;
            aspect-ratio: 1;
            object-fit: cover;
            border-radius: 20px;
        }
    }

    @media (max-width: 500px) {
        width: 100%;
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

    @media (max-width: 768px) {
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
    }
`;

export const PostTagBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
        justify-content: flex-start;
        width: 100%;
        flex-wrap: wrap;
    }
`;
