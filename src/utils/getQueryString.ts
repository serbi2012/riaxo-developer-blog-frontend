/**
 * URL의 쿼리 스트링을 파싱하여 객체로 반환하는 함수
 * @returns {Record<string, string>} - 쿼리 스트링 파라미터를 키-값 쌍으로 가지는 객체
 */
export const getQueryString = (): Record<string, string> => {
    // 현재 URL에서 쿼리 스트링을 가져온 후 '?'를 제거
    const query = window.location.search.substring(1);

    // '&' 기호로 각 쿼리 파라미터를 분리
    const vars = query.split("&");

    // 쿼리 파라미터를 저장할 객체 초기화
    const queryObject: Record<string, string> = {};

    // 각 쿼리 파라미터를 순회하며 '=' 기호로 키와 값을 분리
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");

        // 키와 값을 디코딩하여 객체에 추가
        // decodeURIComponent를 사용하여 퍼센트 인코딩된 문자열을 정상적인 문자열로 변환
        queryObject[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }

    // 파싱된 쿼리 스트링 객체 반환
    return queryObject;
};
