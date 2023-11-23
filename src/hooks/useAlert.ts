import swal from "sweetalert";

export const useAlert = () => {
    const handleAlert = async (content: string, title: string = "안내", button: string = "확인") => {
        await swal(title, content, { buttons: { [button]: true } });
    };

    return { handleAlert };
};

export const useConfirm = () => {
    const handleConfirm = async (
        text: string,
        title: string = "안내",
        confirm: string = "확인",
        cancel: string = "취소",
    ) => {
        const isConfirmed = await swal({ title, text, buttons: [cancel, confirm], className: "swal-confirm" });

        switch (isConfirmed) {
            case confirm:
                return true;

            case cancel:
                return false;

            default:
                return false;
        }
    };

    return { handleConfirm };
};
