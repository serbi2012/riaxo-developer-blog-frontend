import { Link } from "react-router-dom";
import { styled } from "styled-components";

import MenuIcon from "@mui/icons-material/Menu";

export const MainWrapper = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 10px;
    height: 80px;
    width: 100%;
    max-width: 1024px;
    background-color: var(--color-white);
    /* background-color: red; */
    z-index: 100;

    & > a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
`;

export const LogoImage = styled.img`
    height: 60px;
    user-select: none;
    cursor: pointer;

    @media (max-width: 768px) {
        aspect-ratio: 0.92;
        object-fit: cover;
        object-position: 0 0;
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 80%;
    flex: 1;
    gap: 10px;
    transition: all 0.1s ease;
`;

export const SubTagContainer = styled.div<{ isVisible: boolean }>`
    position: absolute;
    display: flex;
    visibility: hidden;
    justify-content: flex-start;
    align-items: center;
    transform: translateY(-50px);
    padding-top: 7px;
    gap: 5px;
    transition: all 0.2s ease;

    ${({ isVisible }) =>
        isVisible &&
        `
        visibility: visible; 
        transform: translateY(40px); 
    `}
`;

export const TagContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 5px;

    &:hover ${SubTagContainer} {
        visibility: visible;
        transform: translateY(33px);
    }
`;

export const MenuTag = styled(Link)<{ isActive?: boolean }>`
    padding: 5px 10px;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
    transition: all 0.1s ease;
    background-color: ${({ isActive }) => (isActive ? "var(--color-font-darknavy)" : "transparent")};

    & > p {
        transition: all 0.2s ease;
        color: ${({ isActive }) => (isActive ? "var(--color-white)" : "var(--color-font-darknavy)")};
    }

    &:hover {
        & > p {
            color: var(--color-font-darknavy);
        }
        background-color: var(--color-border-gray2);
    }

    &:active {
        background-color: var(--color-border-gray2);
        filter: brightness(1.05);
    }

    @media (max-width: 768px) {
        & > p {
            font-size: 14px;
            line-height: 20px;
        }
    }
`;

export const HamburgerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    aspect-ratio: 1;
    padding: 1px;
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
    transition: all 0.1s ease;

    &:hover {
        background-color: var(--color-border-gray2);
    }

    &:active {
        background-color: var(--color-border-gray2);
        filter: brightness(1.05);
    }
`;

export const HamburgerIcon = styled(MenuIcon)`
    height: 100%;
`;
