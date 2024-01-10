import { useMutation, UseMutationOptions } from "react-query";
import { useSnackbar } from "notistack";

/**
 * react-query 라이브러리의 useMutation 훅을 확장한 커스텀 훅.
 * 서버의 상태를 변경하는 작업(POST, PUT, DELETE 등)을 수행할 때 사용.
 * notistack의 useSnackbar를 사용하여 에러 발생 시 스낵바에 에러 메시지를 표시.
 *
 * @param mutationFn - 서버에 요청을 보낼 비동기 함수. 변수를 인자로 받고 Promise를 반환.
 * @param options - useMutation에 전달될 추가 옵션. "mutationFn"을 제외한 UseMutationOptions 타입의 프로퍼티를 받음.
 *
 * @returns useMutation 훅의 결과. 에러가 발생하면 스낵바에 에러 메시지를 표시하고, console.error로 에러를 콘솔에 기록.
 * 사용자가 제공한 options에 onError 콜백이 있으면 해당 콜백을 호출.
 *
 * @template TData - mutationFn으로부터 반환되는 데이터의 타입.
 * @template TError - 에러 객체의 타입. 기본값은 Error.
 * @template TVariables - mutationFn에 전달될 변수들의 타입. 기본값은 void.
 * @template TSnapshot - mutationFn 실행 전의 상태를 나타내는 타입. 롤백 메커니즘에 사용될 수 있음.
 */
export function useCustomMutation<TData, TError = Error, TVariables = void, TSnapshot = unknown>(
    mutationFn: (variables: TVariables) => Promise<TData>,
    options?: Omit<UseMutationOptions<TData, TError, TVariables, TSnapshot>, "mutationFn">,
) {
    const { enqueueSnackbar } = useSnackbar();

    return useMutation<TData, TError, TVariables, TSnapshot>(mutationFn, {
        ...options,
        onError: (error: any, variables, context) => {
            enqueueSnackbar(error.message, { variant: "error" }); // 에러 메시지를 스낵바에 표시.
            console.error(error); // 에러를 콘솔에 기록.
            options?.onError?.(error, variables, context); // 사용자가 제공한 onError 콜백이 있으면 호출.
        },
    });
}
