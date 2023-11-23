import * as S from "./TagListSearchBar.styles";
import { Autocomplete, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import PostTag from "../../../../components/@shared/PostTag/PostTag.component";
import { fetchTagList } from "../../../../api/tag.queries";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface PropsType {
    setSelectedTags: (value: any) => void;
}

const PostListSearchBar = ({ setSelectedTags }: PropsType) => {
    const [tags, setTags] = useState<any[]>([]);
    const [tagOptions, setTagOptions] = useState<any[]>([]);
    const [isFoldMode, setIsFoldMode] = useState<boolean>(false);

    const handleOnTagClick = (item: any) => {
        let newValue;

        if (!tags.includes(item)) {
            setTags((prev) => {
                newValue = [...prev, item];
                return [...prev, item];
            });

            if (tags.length === 0) {
                setSelectedTags([...tags, item]);
            } else {
                setSelectedTags(newValue);
            }
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
                <Button
                    color="inherit"
                    sx={{ padding: "10px 0px" }}
                    onClick={() => {
                        setIsFoldMode((prev) => !prev);
                    }}
                >
                    <KeyboardArrowDownIcon
                        style={{
                            transform: isFoldMode ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "all 0.3s ease",
                        }}
                    />
                </Button>
                <S.TagsBox isFoldMode={isFoldMode}>
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
                </S.TagsBox>
            </S.TagsWrapper>
        </S.MainWrapper>
    );
};

export default PostListSearchBar;
