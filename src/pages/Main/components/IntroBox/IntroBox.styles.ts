import { styled } from "styled-components";
import { T } from "../../../../styles/TextGuide.styles";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 100%;
`;

export const ProfileImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 250px;

    & > img {
        height: 100%;
        border-radius: 5%;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    gap: 10px;
`;

export const TextTitle = styled(T.Subtitle1)`
    font-size: 30px;
    line-height: 24px;
    margin-bottom: 20px;
`;

export const TextItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: start;
`;
