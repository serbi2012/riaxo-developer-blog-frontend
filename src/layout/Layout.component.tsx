import { IProps } from "./Layout.types";

const Layout: React.FC<IProps> = (props: IProps) => {
    return <>{props.children}</>;
};

export default Layout;
