import { styled } from "styled-components";

export const MainWrapper = styled.div<{ isAnimation?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    background-color: var(--color-border-gray3);
    border-radius: 20px;

    ${({ isAnimation }) =>
        isAnimation &&
        `
        cursor: pointer;
        user-select:none;
        transition: all 0.1s ease;

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
    `}
`;
