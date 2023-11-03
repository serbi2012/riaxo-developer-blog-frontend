import { styled } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

export const MainWrapper = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    height: 60px;
    width: 100%;
    max-width: 1024px;
    background-color: #ffffff;
    z-index: 100;

    & > a {
        height: 100%;
    }
`;

export const LogoImage = styled.img`
    height: 100%;
    user-select: none;
    cursor: pointer;
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 80%;
    gap: 10px;

    & > p,
    & > a {
        padding: 5px 10px;
        border-radius: 5px;
        user-select: none;
        cursor: pointer;
        transition: all 0.1s ease;

        &:hover {
            background-color: #dadada;
        }

        &:active {
            background-color: #dadada;
            filter: brightness(1.05);
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
        background-color: #dadada;
    }

    &:active {
        background-color: #dadada;
        filter: brightness(1.05);
    }
`;

export const HamburgerIcon = styled(MenuIcon)`
    height: 100%;
`;
