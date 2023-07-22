import { styled } from "styled-components";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";
import Filter6Icon from "@mui/icons-material/Filter6";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import AdjustIcon from "@mui/icons-material/Adjust";

export const SidebarWrapper = styled.div`
    display: flex;
    height: 100vh;
`;

export const LOGOWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        cursor: pointer;
    }
`;

export const LOGO = styled.img`
    margin-left: auto;
`;

export const IconWrapper = styled.div`
    margin-left: auto;
    margin-right: 10px;
`;

export const MuiFullscreenIcon = styled(PanoramaFishEyeIcon)`
    color: gray;
`;

export const MuiCloseFullscreenIcon = styled(AdjustIcon)`
    color: gray;
`;

export const MenuTitleWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const MuiFilter1Icon = styled(Filter1Icon)`
    color: gray;
`;

export const MuiFilter2Icon = styled(Filter2Icon)`
    color: gray;
`;

export const MuiFilter3Icon = styled(Filter3Icon)`
    color: gray;
`;

export const MuiFilter4Icon = styled(Filter4Icon)`
    color: gray;
`;

export const MuiFilter5Icon = styled(Filter5Icon)`
    color: gray;
`;

export const MuiFilter6Icon = styled(Filter6Icon)`
    color: gray;
`;

export const MuiHomeIcon = styled(HomeIcon)`
    color: gray;
`;

export const Contents = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

export const PageHeader = styled.div`
    width: 100%;
    height: 30px;
    min-height: 30px;
    background-color: #4285f4;
    display: flex;
    justify-content: space-between;
`;

export const HeaderTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    color: white;
`;

export const HeaderLoginInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    box-shadow: -1px 0 0 0 white;
    &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

export const MuiKeyboardArrowDownIcon = styled(KeyboardArrowDownIcon)`
    color: white;
`;

export const CenterDiv = styled.div`
    display: flex;
    align-items: center;

    & > svg {
        width: 20px;
    }
`;

export const PageContents = styled.div`
    flex: 1;
`;
