import GSSidebar from "../components/GSSidebar/GSSidebar.component";
import { IProps } from "./Layout.types";

const Layout: React.FC<IProps> = (props: IProps) => {
    return (
        <>
            <GSSidebar>{props.children}</GSSidebar>
        </>
    );
};

export default Layout;
