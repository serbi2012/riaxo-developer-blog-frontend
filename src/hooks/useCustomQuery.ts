import { useQuery, UseQueryOptions } from "react-query";
import { useSnackbar } from "notistack";

export function useCustomQuery<TQueryFnData, TError = Error>(
    queryKey: any,
    queryFn: () => Promise<TQueryFnData>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError>, "queryKey" | "queryFn">,
) {
    const { enqueueSnackbar } = useSnackbar();

    return useQuery<TQueryFnData, TError>(queryKey, queryFn, {
        retry: false,
        ...options,
        onError: (error: any) => {
            enqueueSnackbar(error.message, { variant: "error" });
            console.error(error);
            options?.onError?.(error);
        },
    });
}
