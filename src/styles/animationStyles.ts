import { keyframes } from "styled-components";

export const fadeInKeyframes = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const fadeOutKeyframes = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;
