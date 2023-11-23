import * as S from "./PostListSearchBar.styles";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const PostListSearchBar: React.FC = () => {
    return (
        <S.MainWrapper>
            <Paper
                component="form"
                sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    border: "1px solid var(--color-border-gray1)",
                    boxShadow: "none",
                }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="검색어를 입력해주세요."
                    inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </S.MainWrapper>
    );
};

export default PostListSearchBar;
