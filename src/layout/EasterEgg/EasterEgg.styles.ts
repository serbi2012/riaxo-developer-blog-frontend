import { styled } from "styled-components";

export const MainWrapper = styled.div<{ isOpen?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    transform: ${({ isOpen }) => (isOpen ? "translateY(0px)" : "translateY(80px)")};
    transition: all 0.3s ease;

    & > svg {
        transform: ${({ isOpen }) => (isOpen ? "translateX(-80px)" : "translateX(0px)")};
        height: 30px;
        width: auto;
        transition: all 0.3s ease;
        user-select: none;
        cursor: pointer;
    }

    @media (max-width: 1280px) {
        display: none;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    transition: all 0.3s ease;

    & > img {
        height: 80px;
        width: auto;
        border-radius: 10px;
        transition: all 0.3s ease;

        &:hover {
            transform: scale(1.1);
            background-color: var(--color-border-gray2);
        }

        &:active {
            transform: scale(1);
            background-color: var(--color-border-gray3);
        }
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    transition: all 0.3s ease;
    user-select: none;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        background-color: var(--color-border-gray2);
    }

    &:active {
        transform: scale(1);
        background-color: var(--color-border-gray3);
    }
`;
