import { keyframes, styled } from "styled-components";

export const slideInKeyframes = keyframes`
    from {
        transform:translateX(1200px ) translateY(50px);
    }
    to {
        transform:translateX(620px) translateY(50px);
        
    }
`;

export const slideOutKeyframes = keyframes`
    from {
        transform:translateX(620px) translateY(50px);
    }
    to {
        transform:translateX(1200px) translateY(50px);
    }
`;

export const MainWrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 5px 7px;
    gap: 5px;
    width: 200px;
    animation: ${slideInKeyframes} 0.5s ease forwards;

    & > p {
        padding: 5px;
        border-radius: 5px;
        user-select: none;
        cursor: pointer;
        transition: all 0.1s ease;

        &:hover {
            background-color: var(--color-border-gray3);
        }

        &:active {
            filter: brightness(0.8);
        }
    }

    @media (max-width: 1300px) {
        animation: ${slideOutKeyframes} 0.5s ease backwards;
    }
`;
