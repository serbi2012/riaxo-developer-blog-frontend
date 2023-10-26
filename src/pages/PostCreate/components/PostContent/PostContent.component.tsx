import * as S from "./PostContent.styles";
import { T } from "../../../../styles/TextGuide.styles";
import { IPostContent } from "./PostContent.types";

const PostContent: React.FC<IPostContent> = ({ title, children }: IPostContent) => {
    return (
        <S.MainWrapper>
            <T.Title1>{title}</T.Title1>
            {children}
        </S.MainWrapper>
    );
};

export default PostContent;
