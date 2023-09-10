import { T } from "../../../../styles/TextGuide.styles";
import * as S from "./PostList.styles";

const POST_MOCK = [
    {
        title: "프론트엔드 개발 기본",
        date: "2023-03-04",
        content: "프론트엔드 개발은 사용자 인터페이스를 구축하는 것을 포함합니다.",
    },
    {
        title: "CSS-in-JS: 리액트 애플리케이션에서 스타일링",
        date: "2023-03-04",
        content: "CSS-in-JS는 스타일링에 대한 인기있는 접근 방식입니다.",
    },
    {
        title: "자바스크립트 프레임워크 비교",
        date: "2023-03-04",
        content: "React, Vue 및 Angular 간의 차이점을 탐색합니다.",
    },
    {
        title: "반응형 웹 디자인 기법",
        date: "2023-03-04",
        content: "웹 애플리케이션을 반응형으로 만드는 방법을 배워봅시다.",
    },
];

const PostList: React.FC = () => {
    return (
        <S.MainWrapper>
            <T.Title1>Post List</T.Title1>
            <S.PostWrapper>
                {POST_MOCK.map((post, index) => (
                    <S.PostItem key={index}>
                        <T.Subtitle1>{post.title}</T.Subtitle1>
                        <T.Body4>{post.date}</T.Body4>
                        <T.Body2>{post.content}</T.Body2>
                    </S.PostItem>
                ))}
            </S.PostWrapper>
        </S.MainWrapper>
    );
};

export default PostList;
