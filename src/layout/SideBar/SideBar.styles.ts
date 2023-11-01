import { styled } from "styled-components";

export const MainWrapper = styled.div<{ isSideBarOpen?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 20px 30px;
    gap: 50px;
    height: 100vh;
    width: 30vw;
    max-width: 320px;
    background-color: #ffffff;
    transform: ${({ isSideBarOpen }) => (isSideBarOpen ? "translateX(0px)" : "translateX(-100vw)")};
    transition: all 0.3s ease;
    z-index: 99999;
`;

export const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;

    & > img {
        width: 70%;
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`;