import * as S from "./index.styles";
import { Autocomplete, Button, TextField } from "@mui/material";
import { useState } from "react";
import PostTag from "../../../../components/@shared/PostTag";
import { fetchTagList } from "../../../../api/tag.queries";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useCustomQuery } from "../../../../hooks/useCustomQuery";

interface PropsType {
    selectedTags: string[];
    setSelectedTags: (value: any) => void;
}

const PostListSearchBar = ({ selectedTags, setSelectedTags }: PropsType) => {
    const [tags, setTags] = useState<any[]>([]);
    const [isFoldMode, setIsFoldMode] = useState<boolean>(false);

    const { data: tagOptions } = useCustomQuery("tags", fetchTagList, {
        select: (data) => data.map((tag) => tag.value),
    });

    const handleOnTagClick = (item: any) => {
        if (tags.includes(item)) {
            setTags((prev) => {
                const newValue = prev.filter((tag) => tag !== item);
                setSelectedTags(newValue);
                return newValue;
            });
        } else {
            setTags((prev) => {
                const newValue = [...prev, item];
                setSelectedTags(newValue);
                return newValue;
            });
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
                    setSelectedTags(newValue);
                }}
                sx={{ width: "100%" }}
                options={tagOptions || []}
                getOptionLabel={(option) => option}
                renderInput={(params) => <TextField {...params} placeholder="태그를 선택해주세요." />}
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
                    {(tagOptions || [])?.map((item, index) => (
                        <PostTag
                            key={index}
                            name={item}
                            size="small"
                            isAnimation
                            isActive={selectedTags?.includes(item)}
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
