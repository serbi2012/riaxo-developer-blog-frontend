import { ConfigProvider } from "antd";
import * as S from "./Main.styles";
import IntroBox from "./components/IntroBox/IntroBox.component";
import MainPagePostCardList from "./components/MainPagePostCardList/MainPagePostCardList.component";
import MainPagePostList from "./components/MainPagePostList/MainPagePostList.component";
import locale from "antd/es/locale/ko_KR";
import { DatePicker as AntDatePicker } from "antd";
import { useEffect } from "react";
import "dayjs/locale/ko";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Main: React.FC = () => {
    const { RangePicker } = AntDatePicker;

    useEffect(() => {
        console.log("locale:", locale);
    }, []);

    return (
        <S.MainWrapper>
            <IntroBox />
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                <ConfigProvider locale={locale}>
                    <RangePicker
                        key="schDate"
                        // bordered={false}
                        placeholder={["시작일", "종료일"]}
                        separator={<div style={{ color: "black" }}>~</div>}
                        allowEmpty={[true, true]}
                    />
                </ConfigProvider>
            </LocalizationProvider>
            <MainPagePostCardList />
            <MainPagePostList />
        </S.MainWrapper>
    );
};

export default Main;
