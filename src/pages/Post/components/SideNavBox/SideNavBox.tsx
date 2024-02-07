import { useEffect, useState } from "react";

import { T } from "../../../../styles/TextGuide.styles";
import * as S from "./SideNavBox.styles";

interface IPropsType {
    titleArray?: string[];
}

export const SideNavBox = ({ titleArray }: IPropsType) => {
    const [activeId, setActiveId] = useState<string | null>(null);

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

    useEffect(() => {
        const handleScroll = () => {
            let currentActiveId = null;
            const navbar = document.getElementById("main-header");
            const navbarHeight = navbar ? navbar.offsetHeight + 200 : 0;

            for (const id of titleArray || []) {
                const element = document.getElementById(id);
                if (element) {
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    if (elementPosition - navbarHeight < window.scrollY) {
                        currentActiveId = id;
                    }
                }
            }

            setActiveId(currentActiveId);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [titleArray]);

    return (
        <S.MainWrapper>
            {titleArray?.map((item, index) => (
                <T.Subtitle2
                    key={index}
                    onClick={() => handleScrollToElement(item)}
                    style={{ fontWeight: item === activeId ? "bold" : "normal" }} // Highlight the active id
                >
                    {index + 1}. {String(item).replace("nav-title-", "").replaceAll("-", " ")}
                </T.Subtitle2>
            ))}
        </S.MainWrapper>
    );
};
