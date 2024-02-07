import { T } from "../../../styles/TextGuide.styles";
import * as S from "./PostTag.styles";

export interface IPostTag {
    name?: string;
    size?: "large" | "small";
    isAnimation?: boolean;
    isActive?: boolean;
    onClick?: React.MouseEventHandler;
}

export const PostTag: React.FC<IPostTag> = ({
    name,
    size = "large",
    isAnimation = false,
    isActive,
    onClick,
}: IPostTag) => {
    return (
        <S.MainWrapper onClick={onClick} isAnimation={isAnimation} isActive={isActive}>
            {size === "large" ? <T.Subtitle1> {name}</T.Subtitle1> : <T.Body3> {name}</T.Body3>}
        </S.MainWrapper>
    );
};
