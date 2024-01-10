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
    animation: ${fadeInKeyframes} 0.5s ease forwards;
    background-color: var(--color-white);
    z-index: 1;
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

    .code-block {
        width: 100%;
        font-family: "Courier New", Courier, monospace;
        background-color: #f7f7f7;
        padding: 2px 4px;
        border-radius: 4px;
        font-size: 0.9em;
        color: #d63384;
        font-weight: bold;
    }
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
    flex-direction: column;
    padding-top: 50px;
    width: 100%;
`;

export const AdminControlBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
`;
