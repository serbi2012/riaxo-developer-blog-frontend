import styled, { keyframes } from "styled-components";
import { T } from "../../../../styles/TextGuide.styles";
import ReactModal from "react-modal";

const slideDown = keyframes`
  0% {
    transform: translate(-50%, -100%);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: auto;
    gap: 10px;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    aspect-ratio: 2;
    background-color: var(--color-white);
    border-radius: clamp(5px, 2vmin, 30px);
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.25);
`;

export const ImageControlBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    & > p {
        user-select: none;
        cursor: pointer;
        font-size: clamp(5px, 2vmin, 14px);
        line-height: clamp(8px, 2vmin, 20px);
        text-align: center;
        word-break: keep-all;
    }
`;

export const ProfileImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    overflow: hidden;
    border-radius: clamp(5px, 2vmin, 30px);
`;

export const LoadingText = styled(T.Body4)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: clamp(5px, 2.5vmin, 13px);
    line-height: clamp(11px, 4vmin, 19px);
`;

export const ProfileDelete = styled.img`
    position: absolute;
    transform: translate(67px, -80px);
    transition: all 0.1s ease-in-out;
    user-select: none;
    cursor: pointer;

    :hover {
        filter: brightness(0.95);
    }

    :active {
        filter: brightness(1.1);
    }
`;

export const ModalBox = styled(ReactModal)`
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    min-width: 526px;
    min-height: 313px;
    height: auto;
    background: var(--color-white);
    border: 0.7px solid var(--color-border-gray2);
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.14);
    border-radius: 10px;
    animation: ${slideDown} 0.3s ease-in-out forwards;

    :focus {
        outline: none;
    }
`;

export const ModalContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > h1 {
        width: 100%;
        padding: 10px 0px;
        padding-left: 10px;
        text-align: center;
    }
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ModalCloseButton = styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    outline: none;
    border: none;
    user-select: none;
    cursor: pointer;
    transform: translate(685px, -30px);

    & > ${T.Subtitle1} {
        font-size: 40px;
        color: var(--color-font-darknavy);
    }
`;
