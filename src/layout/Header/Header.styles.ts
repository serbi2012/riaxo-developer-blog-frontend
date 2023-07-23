import { styled } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

export const MainWrapper = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
    max-width: 1024px;
    background-color: #ffffff;
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
    gap: 30px;

    & > p {
        padding: 1px 5px;
        border-radius: 5px;
        user-select: none;
        cursor: pointer;

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
