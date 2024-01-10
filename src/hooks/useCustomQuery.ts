import { useQuery, UseQueryOptions } from "react-query";
import { useSnackbar } from "notistack";

/**
 * react-query 라이브러리의 useQuery 훅을 감싸는 커스텀 React 훅.
 * notistack의 useSnackbar 훅을 사용하여 에러 처리 기능을 추가로 제공.
 *
 * @param {any} queryKey - 캐시에서 쿼리를 식별하는데 사용되는 고유한 키.
 * @param {() => Promise<TQueryFnData>} queryFn - 쿼리를 실행할 때 호출될 비동기 함수.
 * @param {Omit<UseQueryOptions<TQueryFnData, TError>, "queryKey" | "queryFn">} [options] - useQuery에 전달될 추가 옵션들.
 *   "queryKey"와 "queryFn"을 제외한 UseQueryOptions 타입의 프로퍼티를 받음.
 *
 * @returns useQuery 훅의 결과. 에러가 발생하면 스낵바에 에러 메시지를 표시하고, console.error로 에러를 콘솔에 기록.
 * 사용자가 제공한 options에 onError 콜백이 있으면 해당 콜백을 호출.
 *
 * @template TQueryFnData - 쿼리 함수에서 반환되는 데이터의 타입.
 * @template TError - 에러 객체의 타입. 기본값은 Error.
 */
export function useCustomQuery<TQueryFnData, TError = Error>(
    queryKey: any,
    queryFn: () => Promise<TQueryFnData>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError>, "queryKey" | "queryFn">,
) {
    const { enqueueSnackbar } = useSnackbar();

    return useQuery<TQueryFnData, TError>(queryKey, queryFn, {
        retry: false, // 기본적으로 실패한 쿼리에 대한 재시도를 하지 않음.
        ...options, // 사용자가 제공한 옵션을 스프레드 문법을 통해 추가.
        onError: (error: any) => {
            enqueueSnackbar(error.message, { variant: "error" }); // 에러 메시지를 스낵바에 표시.
            console.error(error); // 에러를 콘솔에 기록.
            options?.onError?.(error); // 사용자가 제공한 onError 콜백이 있으면 호출.
        },
    });
}
