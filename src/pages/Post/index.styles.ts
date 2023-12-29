import { styled } from "styled-components";
import { fadeInKeyframes } from "../../styles/animationStyles";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 50px 20px;
    width: 100%;
    gap: 100px;
    animation: ${fadeInKeyframes} 0.5s ease forwards;
`;

export const ThumbNailImage = styled.img`
    width: 100%;
    border-radius: 30px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    gap: 50px;
`;

export const TextContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;

    div {
        margin: 5px 0px;
    }
`;

export const ContentBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
`;

export const PostTagBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    gap: 10px;
    width: 100%;
`;
