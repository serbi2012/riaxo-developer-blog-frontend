import { styled } from "styled-components";

export const MainWrapper = styled.form`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 50px 20px;
    width: 100%;
    gap: 50px;
`;

export const ThumbNailImage = styled.img`
    width: 100%;
    border-radius: 30px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`;

export const TitleInput = styled.input`
    width: 100%;
    text-align: left;
    padding: 10px;
    color: var(--brand-primary-darknavy);
    font-size: 48px;
    line-height: 60px;
    font-weight: 700;
    font-family: "Noto Sans KR";
    font-style: normal;
    border: 2px solid transparent;
    border-radius: 10px;
    transition: all ease 0.1s;

    &:hover {
        border: 2px solid #c8c8c8;
    }

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #c8c8c8;
    }
`;

export const ImageContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 30px;

    & > .vertical-line {
        height: 180px;
        border-right: 1px solid #00000040;
    }
`;

export const ImageGenerateBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    width: 64%;
    gap: 5px;
`;

export const GeneratedImageBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 10px 0px;
    gap: 10px;
    overflow-x: scroll;
`;

export const AiImage = styled.img`
    min-height: 100px;
    max-height: 100px;
    min-width: 200px;
    max-width: 200px;
    object-fit: cover;
    cursor: pointer;
`;

export const Content = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    gap: 50px;
`;

export const ContentBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    gap: 10px;
`;

export const PostTagBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    gap: 10px;
    width: 100%;
`;
