import { styled } from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding-top: 60px;
    min-height: calc(100vh - 60px);
    width: 100%;
`;

export const BlackBackGround = styled.div<{ isSideBarOpen?: boolean }>`
    display: ${({ isSideBarOpen }) => (isSideBarOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    background-color: black;
    opacity: 0.3;
    transition: all 0.3s ease;
    z-index: 99998;
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1024px;
`;

export const LoadingContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: var(--color-border-gray1);
    z-index: 100000;
`;

export const EasterEggContainer = styled.div<{ isOpen?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    transform: ${({ isOpen }) => (isOpen ? "translateY(0px)" : "translateY(80px)")};
    transition: all 0.3s ease;
    user-select: none;
    cursor: pointer;

    & > svg {
        transform: ${({ isOpen }) => (isOpen ? "translateX(-80px)" : "translateX(0px)")};
        height: 30px;
        width: auto;
        transition: all 0.3s ease;
    }

    & > div {
        & > img {
            height: 80px;
            width: auto;
        }
    }

    @media (max-width: 1280px) {
        display: none;
    }
`;
