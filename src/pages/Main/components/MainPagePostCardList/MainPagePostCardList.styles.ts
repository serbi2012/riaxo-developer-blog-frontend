import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { T } from "../../../../styles/TextGuide.styles";

export const MainWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;

export const PostCardWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    height: 62vmin;
    width: 100%;
`;

export const LargePostCard = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 2vmin;
    width: 50%;
    min-height: 100%;
    gap: 5px;
    border-radius: 10px;
    border: 2px solid #dadada;
    transition: all 0.2s ease;

    &:hover {
        scale: 1.03;
        border: 3px solid #dadada;
    }
`;

export const SmallPostCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
    width: 50%;
    gap: 20px;

    @media (max-height: 62vmin) {
        & > :nth-child(n + 3) {
            display: none;
        }
    }
`;

export const SmallPostCard = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: 2vmin;
    flex: 1;
    gap: 5px;
    border-radius: 10px;
    border: 2px solid #dadada;
    transition: all 0.2s ease;

    &:hover {
        border: 3px solid #dadada;
        scale: 1.03;
    }

    & > ${T.Body2} {
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 4.3em;
    }
`;
