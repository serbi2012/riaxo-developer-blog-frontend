import { T } from "../../../../styles/TextGuide.styles";
import * as S from "./index.styles";

interface IPropsType {
    titleArray?: string[];
}

const SideNavBox = ({ titleArray }: IPropsType) => {
    const handleScrollToElement = (id: string) => {
        const element = document.getElementById(id);
        const navbar = document.getElementById("main-header");

        if (navbar && element) {
            const navbarHeight = navbar.offsetHeight + 10;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return (
        <S.MainWrapper>
            {titleArray?.map((item, index) => (
                <T.Subtitle2 key={index} onClick={() => handleScrollToElement(item)}>
                    {index + 1}. {String(item).replace("nav-title-", "").replaceAll("-", " ")}
                </T.Subtitle2>
            ))}
        </S.MainWrapper>
    );
};

export default SideNavBox;
