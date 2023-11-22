import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        appearance: none;
    }

    :root {
        --color-font-darknavy: #333333;
        --color-font-placeholder-darknavy: #c8c8c8;
        --color-border-gray1: #00000040;
        --color-border-gray2: #dadada;
        --color-border-gray3: #dadada40;
        --color-white: #ffffff;
        --color-black: #000000;
    }

    p {
        font-family: "Noto Sans KR";
        color: var(--color-font-darknavy);
    }

    h1,
    h2,
    h3,
    h4 {
        font-family: "Noto Sans KR";
        color: var(--color-font-darknavy);
    }

    h1,
    h2 {
        font-size: 20px;
        line-height: 29px;
    }

    h3,
    h4 {
        font-size: 18px;
        line-height: 26px;
    }

    h1,
    h3 {
        font-weight: 700;
    }

    h2,
    h4 {
        font-weight: 400;
    }

    a {
        text-decoration: none;
        color: var(--color-black);
    }

    .center-align {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    ::-webkit-scrollbar {
        width: 16px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;
