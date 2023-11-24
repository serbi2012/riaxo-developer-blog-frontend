import { useMutation, UseMutationOptions } from "react-query";
import { useSnackbar } from "notistack";

export function useCustomMutation<TData, TError = Error, TVariables = void, TSnapshot = unknown>(
    mutationFn: (variables: TVariables) => Promise<TData>,
    options?: Omit<UseMutationOptions<TData, TError, TVariables, TSnapshot>, "mutationFn">,
) {
    const { enqueueSnackbar } = useSnackbar();

    return useMutation<TData, TError, TVariables, TSnapshot>(mutationFn, {
        ...options,
        onError: (error: any, variables, context) => {
            enqueueSnackbar(error.message, { variant: "error" });
            console.error(error);
            options?.onError?.(error, variables, context);
        },
    });
}
