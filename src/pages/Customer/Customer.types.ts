export interface ICustomerProps {
    children: JSX.Element;
}

export interface ICustomerHeaderButtonProps {
    name: string;
    type: "inherit" | "primary" | "secondary" | "info" | "warning" | "error" | "success";
}
