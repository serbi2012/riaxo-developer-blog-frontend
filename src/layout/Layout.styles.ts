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
