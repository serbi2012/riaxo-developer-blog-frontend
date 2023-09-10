import * as S from "./PostTag.styles";
import { T } from "../../../../styles/TextGuide.styles";
import { IPostTag } from "./PostTag.types";

const PostTag: React.FC<IPostTag> = ({ name }: IPostTag) => {
    return (
        <S.MainWrapper>
            <T.Subtitle1>{name}</T.Subtitle1>
        </S.MainWrapper>
    );
};

export default PostTag;
