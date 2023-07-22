import { Sidebar, Menu, MenuItem, SubMenu, MenuItemStyles } from "react-pro-sidebar";
import * as S from "./GSSidebar.styles";
import logo from "../../assets/image/logo.png";
import collapsedLogo from "../../assets/image/collapsedLogo.png";
import React, { useEffect, useState } from "react";
import { IGSSidebarProps } from "./GSSidebar.types";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import NearMeIcon from "@mui/icons-material/NearMe";
import { Link, useLocation } from "react-router-dom";
import * as T from "../../styles/TextGuide.styles";
import { useRecoilState } from "recoil";
import { collapsedState } from "../../recoil/atoms";

const GSSidebar: React.FC<IGSSidebarProps> = (props: IGSSidebarProps) => {
    const [collapsed, setCollapsed] = useRecoilState<boolean>(collapsedState);

    const [title, setTitle] = useState<string>("");
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    const location = useLocation();

    const clickCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    const menuItemStyles: MenuItemStyles = {
        SubMenuExpandIcon: {
            color: "#b6b7b9",
            display: collapsed ? "none" : "initial",
        },
    };

    const clickLoginInfo = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    // TODO - 라우터 경로가 늘어날때마다 아래와 같은 형식으로 상수를 추가하기
    // NOTE - title은 보여질 문구, pathname은 location.pathname, search는 쿼리스트링을 배열의 형태로 넣음
    const HEADER_TITLE = [
        {
            title: "회원관리 > 온라인 회원",
            pathname: "/customer/list",
            search: [],
        },
    ];

    useEffect(() => {
        const matchedHeader = HEADER_TITLE.find(
            (header) =>
                location.pathname === header.pathname &&
                header.search.every((search) => location.search.includes(search)),
        );

        const changedTitle = matchedHeader ? matchedHeader.title : "";
        setTitle(changedTitle);
    }, [location]);

    return (
        <S.SidebarWrapper>
            <Sidebar collapsed={collapsed} transitionDuration={400} collapsedWidth="75px">
                <S.LOGOWrapper>
                    {collapsed ? <S.LOGO src={collapsedLogo} /> : <S.LOGO src={logo} />}
                    <S.IconWrapper>
                        {collapsed ? (
                            <S.MuiFullscreenIcon onClick={clickCollapse} />
                        ) : (
                            <S.MuiCloseFullscreenIcon onClick={clickCollapse} />
                        )}
                    </S.IconWrapper>
                </S.LOGOWrapper>
                <Menu menuItemStyles={menuItemStyles}>
                    <Link to="/">
                        <MenuItem icon={<S.MuiHomeIcon />}>HOME</MenuItem>
                    </Link>

                    <SubMenu icon={<S.MuiFilter1Icon />} label={"회원관리"}>
                        <Link to="/customer/list">
                            <MenuItem>온라인 회원</MenuItem>
                        </Link>
                    </SubMenu>

                    <SubMenu icon={<S.MuiFilter2Icon />} label={"물류관리"}>
                        <MenuItem>창고이동현황</MenuItem>
                        <MenuItem>로케이션관리</MenuItem>
                    </SubMenu>

                    <SubMenu icon={<S.MuiFilter3Icon />} label={"주문관리"}>
                        <MenuItem>출고접수주문관리</MenuItem>
                        <MenuItem>직송주문관리</MenuItem>
                        <MenuItem>미출주문관리</MenuItem>
                        <MenuItem>출고완료관리</MenuItem>
                        <MenuItem>CS주문관리</MenuItem>
                        <MenuItem>입금전주문</MenuItem>
                    </SubMenu>

                    <SubMenu icon={<S.MuiFilter4Icon />} label={"품목관리"}>
                        <MenuItem>온라인품목관리</MenuItem>
                        <MenuItem>지점별재고조회</MenuItem>
                        <MenuItem>더존품목관리</MenuItem>
                    </SubMenu>

                    <SubMenu icon={<S.MuiFilter5Icon />} label={"영업관리"}>
                        <MenuItem>거래처영업현황</MenuItem>
                        <MenuItem>자동차검사정비사업조합</MenuItem>
                    </SubMenu>

                    <SubMenu icon={<S.MuiFilter6Icon />} label={"성과관리"}>
                        <MenuItem>KPI관리</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
            <S.Contents>
                <S.PageHeader>
                    <S.HeaderTitle>
                        <S.CenterDiv>
                            <NearMeIcon />
                            <T.Body2 color="white">&nbsp;{title}</T.Body2>
                        </S.CenterDiv>
                    </S.HeaderTitle>
                    <S.HeaderLoginInfo onClick={clickLoginInfo}>
                        <S.MuiKeyboardArrowDownIcon fontSize="medium" />
                    </S.HeaderLoginInfo>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                    >
                        <Typography sx={{ p: 2 }}>
                            <S.CenterDiv>
                                <LogoutIcon />
                                &nbsp;로그아웃
                            </S.CenterDiv>
                        </Typography>
                    </Popover>
                </S.PageHeader>
                <S.PageContents>{props.children}</S.PageContents>
            </S.Contents>
        </S.SidebarWrapper>
    );
};

export default GSSidebar;
