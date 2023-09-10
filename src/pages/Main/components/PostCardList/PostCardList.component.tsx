import { T } from "../../../../styles/TextGuide.styles";
import * as S from "./PostCardList.styles";

const PostCardList: React.FC = () => {
    return (
        <S.MainWrapper>
            <T.Title1>Recent Posts</T.Title1>
            <S.PostCardWrapper>
                <S.LargePostCard to="/post?index=1">
                    <T.Subtitle1>1번 포스트</T.Subtitle1>
                    <T.Body4>2023-03-04</T.Body4>
                    <T.Body2>
                        글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용
                        글내용 글내용
                    </T.Body2>
                </S.LargePostCard>
                <S.SmallPostCardWrapper>
                    <S.SmallPostCard to="/post?index=2">
                        <T.Subtitle1>2번 포스트</T.Subtitle1>
                        <T.Body4>2023-03-04</T.Body4>
                        <T.Body2>
                            글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용
                            글내용 글내용
                        </T.Body2>
                    </S.SmallPostCard>
                    <S.SmallPostCard to="/post?index=3">
                        <T.Subtitle1>3번 포스트</T.Subtitle1>
                        <T.Body4>2023-03-04</T.Body4>
                        <T.Body2>
                            글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용
                            글내용 글내용
                        </T.Body2>
                    </S.SmallPostCard>
                    <S.SmallPostCard to="/post?index=4">
                        <T.Subtitle1>4번 포스트</T.Subtitle1>
                        <T.Body4>2023-03-04</T.Body4>
                        <T.Body2>
                            글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용
                            글내용 글내용
                        </T.Body2>
                    </S.SmallPostCard>
                </S.SmallPostCardWrapper>
            </S.PostCardWrapper>
        </S.MainWrapper>
    );
};

export default PostCardList;
