import * as S from "./TagListSearchBar.styles";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import PostTag from "../../../../components/@shared/PostTag/PostTag.component";

const TAG_ITEMS = ["Dev", "React", "NodeJS"];

const PostListSearchBar: React.FC = () => {
    const [tags, setTags] = useState<any[]>([]);

    const handleOnTagClick = (item: any) => {
        if (!tags.includes(item)) {
            setTags((prev) => [...prev, item]);
        }
    };

    return (
        <S.MainWrapper>
            <Autocomplete
                multiple
                filterSelectedOptions
                freeSolo
                value={tags}
                onChange={(event: any, newValue: any) => {
                    setTags(newValue);
                }}
                sx={{ width: "100%" }}
                options={TAG_ITEMS}
                getOptionLabel={(option) => option}
                renderInput={(params) => <TextField {...params} placeholder="태그를 입력해주세요." />}
            />
            <S.TagsWrapper>
                {TAG_ITEMS?.map((item, index) => (
                    <PostTag
                        key={index}
                        name={item}
                        size="small"
                        isAnimation
                        onClick={() => {
                            handleOnTagClick(item);
                        }}
                    />
                ))}
            </S.TagsWrapper>
        </S.MainWrapper>
    );
};

export default PostListSearchBar;
