import { Dispatch, SetStateAction } from "react";

export interface IManageCustomerFormProps {
    onSubmit?: (data: any) => void;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    customerData?: any;
}
