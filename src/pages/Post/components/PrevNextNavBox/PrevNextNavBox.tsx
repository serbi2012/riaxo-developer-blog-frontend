import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { T } from "../../../../styles/TextGuide.styles";
import { IPost } from "../../../../types";
import * as S from "./PrevNextNavBox.styles";

interface IProps {
    postData?: IPost[];
}

export const PrevNextNavBox = ({ postData }: IProps) => {
    return (
        <S.MainWrapper>
            {postData?.[0]?.nextPost ? (
                <S.ContentBox
                    isNext
                    to={`/post?_id=${postData?.[0]?.nextPost?._id}`}
                    backImage={postData?.[0]?.nextPost?.thumbnailURL}
                >
                    <S.PostTagBox>
                        <ArrowBackIcon /> <T.Subtitle1>Next</T.Subtitle1>
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
                        <T.Subtitle1>Prev</T.Subtitle1>
                        <ArrowForwardIcon />
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
