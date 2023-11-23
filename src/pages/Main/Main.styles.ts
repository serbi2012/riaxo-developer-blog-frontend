import { styled } from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 50px 20px;
    width: 100%;
    gap: 100px;
`;

export const IntroContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    border-bottom: 2px solid var(--color-border-gray2);
`;
