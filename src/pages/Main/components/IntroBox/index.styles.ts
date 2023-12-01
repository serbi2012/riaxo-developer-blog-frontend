import { styled } from "styled-components";
import { fadeInKeyframes } from "../../../../styles/animationStyles";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 100%;
    animation: ${fadeInKeyframes} 0.3s ease forwards;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ProfileImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;

    & > img {
        height: 100%;
        border-radius: 5%;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    gap: 10px;
`;

export const TextItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: start;

    & > a {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        svg {
            scale: 0.8;
        }
    }
`;
