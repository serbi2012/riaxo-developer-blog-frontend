import * as S from "./TagListSearchBar.styles";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import PostTag from "../../../../components/@shared/PostTag/PostTag.component";
import { fetchTagList } from "../../../../api/tag.queries";

interface PropsType {
    setSelectedTags: (value: any) => void;
}

const PostListSearchBar = ({ setSelectedTags }: PropsType) => {
    const [tags, setTags] = useState<any[]>([]);
    const [tagOptions, setTagOptions] = useState<any[]>([]);

    const handleOnTagClick = (item: any) => {
        if (!tags.includes(item)) {
            let newValue;

            setTags((prev) => {
                newValue = [...prev, item];
                return [...prev, item];
            });
            setSelectedTags(newValue);
        }
    };

    useEffect(() => {
        (async () => {
            const tagRes = await fetchTagList();
            const parsedTagOption = tagRes?.map((item) => item?.value);

            setTagOptions(parsedTagOption);
        })();
    }, []);

    return (
        <S.MainWrapper>
            <Autocomplete
                multiple
                filterSelectedOptions
                freeSolo
                value={tags}
                onChange={(event: any, newValue: any) => {
                    setTags(newValue);
                    setSelectedTags(newValue);
                }}
                sx={{ width: "100%" }}
                options={tagOptions}
                getOptionLabel={(option) => option}
                renderInput={(params) => <TextField {...params} placeholder="태그를 입력해주세요." />}
            />
            <S.TagsWrapper>
                {tagOptions?.map((item, index) => (
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
