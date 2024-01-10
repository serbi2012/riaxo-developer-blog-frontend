import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { T } from "../../../../styles/TextGuide.styles";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 5px 7px;
    height: 150px;
    width: 100%;
    margin-top: 100px;
`;

export const ContentBox = styled(Link)<{ isNext?: boolean; backImage?: string }>`
    display: flex;
    justify-content: flex-start;
    align-items: ${({ isNext }) => (isNext ? "flex-start" : "flex-end")};
    justify-content: flex-end; /* 글씨가 아래에 위치하도록 조정 */
    flex-direction: column;
    padding: 5px 7px;
    height: 90px; /* 초기 높이 */
    width: 30%;
    border: 2px solid var(--color-font-darknavy);
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;

    /* 배경 이미지를 위한 ::after 의사 요소 생성 */
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${({ backImage }) => backImage});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: saturate(0.1);
        opacity: 0.2;
        transition: all 0.3s ease; /* 모든 속성에 대해 트랜지션 적용 */
    }

    /* 그라데이션 효과를 위한 ::before 의사 요소 생성 */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)); /* 하얀색 그라데이션 */
        opacity: 0; /* 초기에는 투명하게 설정 */
        transition: opacity 0.3s ease; /* 트랜지션 적용 */
        z-index: 2; /* 그라데이션을 위로 올립니다 */
    }

    /* 마우스 호버 시 스타일 변경 */
    &:hover {
        height: 140px; /* 높이 증가 */
    }

    &:hover::after {
        opacity: 0.6; /* 불투명도 증가 */
        top: -10px; /* 이미지를 위로 이동 */
        filter: saturate(0.8);
        z-index: 1; /* 배경 이미지를 그라데이션 아래로 설정합니다 */
    }

    &:hover::before {
        opacity: 1; /* 그라데이션 투명도 증가 */
    }

    ${T.Subtitle2}, ${T.Subtitle1} {
        text-align: ${({ isNext }) => (isNext ? "left" : "right")};
        z-index: 3; /* 글씨가 그라데이션 위에 나타나도록 z-index 증가 */
        position: relative;
    }
`;

export const PostTagBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
