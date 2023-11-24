import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { T } from "../../../../styles/TextGuide.styles";
import { fadeInKeyframes } from "../../../../styles/animationStyles";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    animation: ${fadeInKeyframes} 0.3s ease forwards;
`;

export const PostCardWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    height: 62vmin;
    width: 100%;
`;

export const LargePostCard = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 2vmin;
    width: 50%;
    min-height: 100%;
    gap: 5px;
    border-radius: 10px;
    border: 2px solid var(--color-border-gray2);
    transition: all 0.2s ease;

    &:hover {
        scale: 1.03;
        border: 3px solid var(--color-border-gray2);
    }

    & > img {
        width: 100%;
        height: 50%;
        border-radius: 10px;
    }

    & > ${T.Subtitle1} {
        margin-top: 10px;
    }
`;

export const SmallPostCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
    width: 50%;
    gap: 20px;

    @media (max-width: 768px) {
        & > :nth-child(n + 3) {
            display: none;
        }
    }

    @media (max-width: 500px) {
        & > :nth-child(n + 2) {
            display: none;
        }
    }
`;

export const SmallPostCard = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 2vmin;
    width: 100%;
    flex: 1;
    gap: 5px;
    border-radius: 10px;
    border: 2px solid var(--color-border-gray2);
    transition: all 0.2s ease;

    &:hover {
        border: 3px solid var(--color-border-gray2);
        scale: 1.03;
    }

    & > img {
        display: none;
    }

    & > ${T.Subtitle1} {
        margin-top: 10px;
    }

    & > ${T.Body2} {
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 4.3em;
    }

    @media (max-width: 500px) {
        img {
            display: flex;
            width: 100%;
            height: auto;
            border-radius: 10px;
        }
    }
`;
