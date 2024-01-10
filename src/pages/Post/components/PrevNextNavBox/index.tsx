import { T } from "../../../../styles/TextGuide.styles";
import { IPost } from "../../../../types/post";
import * as S from "./index.styles";

interface IPrevNextNavBox {
    postData?: IPost[];
}

const PrevNextNavBox = ({ postData }: IPrevNextNavBox) => {
    return (
        <S.MainWrapper>
            {postData?.[0]?.nextPost ? (
                <S.ContentBox
                    isNext
                    to={`/post?_id=${postData?.[0]?.nextPost?._id}`}
                    backImage={postData?.[0]?.nextPost?.thumbnailURL}
                >
                    <S.PostTagBox>
                        <T.Subtitle1>다음글</T.Subtitle1>
                    </S.PostTagBox>
                    <S.Footer>
                        <T.Subtitle2>{postData?.[0]?.nextPost?.title}</T.Subtitle2>
                    </S.Footer>
                </S.ContentBox>
            ) : (
                <div />
            )}
            {postData?.[0]?.prevPost ? (
                <S.ContentBox
                    to={`/post?_id=${postData?.[0]?.prevPost?._id}`}
                    backImage={postData?.[0]?.prevPost?.thumbnailURL}
                >
                    <S.PostTagBox>
                        <T.Subtitle1>이전글</T.Subtitle1>
                    </S.PostTagBox>
                    <S.Footer>
                        <T.Subtitle2>{postData?.[0]?.prevPost?.title}</T.Subtitle2>
                    </S.Footer>
                </S.ContentBox>
            ) : (
                <div />
            )}
        </S.MainWrapper>
    );
};

export default PrevNextNavBox;
