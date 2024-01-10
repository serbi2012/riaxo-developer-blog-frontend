import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { T } from "../../../../styles/TextGuide.styles";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 5px 7px;
    height: 150px;
    width: 100%;
    margin-top: 100px;
`;

export const ContentBox = styled(Link)<{ isNext?: boolean; backImage?: string }>`
    display: flex;
    justify-content: flex-start;
    align-items: ${({ isNext }) => (isNext ? "flex-start" : "flex-end")};
    justify-content: flex-end;
    flex-direction: column;
    padding: 5px 7px;
    height: 90px;
    width: 30%;
    border: 2px solid var(--color-font-darknavy);
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${({ backImage }) => backImage});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: saturate(0.1);
        opacity: 0.2;
        transition: all 0.3s ease;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 2;
    }

    &:hover {
        height: 140px;
    }

    &:hover::after {
        opacity: 0.6;
        top: -10px;
        filter: saturate(0.8);
        z-index: 1;
    }

    &:hover::before {
        opacity: 1;
    }

    ${T.Subtitle2}, ${T.Subtitle1} {
        text-align: ${({ isNext }) => (isNext ? "left" : "right")};
        z-index: 3;
        position: relative;
    }
`;

export const PostTagBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
