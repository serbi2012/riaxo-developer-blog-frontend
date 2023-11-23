import { T } from "../../../styles/TextGuide.styles";
import * as S from "./PostTag.styles";

import { IPostTag } from "./PostTag.types";

const PostTag: React.FC<IPostTag> = ({ name, size = "large", isAnimation = false, onClick }: IPostTag) => {
    return (
        <S.MainWrapper onClick={onClick} isAnimation={isAnimation}>
            {size === "large" ? <T.Subtitle1> {name}</T.Subtitle1> : <T.Body3> {name}</T.Body3>}
        </S.MainWrapper>
    );
};

export default PostTag;
