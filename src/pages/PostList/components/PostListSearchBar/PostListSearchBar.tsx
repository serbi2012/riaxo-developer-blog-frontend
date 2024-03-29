import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Paper } from "@mui/material";

import * as S from "./PostListSearchBar.styles";

export interface IPropsType {
    setSearchInput: (value: any) => void;
}

export const PostListSearchBar = ({ setSearchInput }: IPropsType) => {
    return (
        <S.MainWrapper>
            <Paper
                component="form"
                sx={{
                    p: "5px 12px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    border: "1px solid var(--color-border-gray1)",
                    boxShadow: "none",
                }}
            >
                <S.SearchInput
                    placeholder="검색어를 입력해주세요."
                    onChange={(event: any) => {
                        setSearchInput(event?.target?.value);
                    }}
                />
                <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </S.MainWrapper>
    );
};
