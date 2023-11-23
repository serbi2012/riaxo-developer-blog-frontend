/**
 * API에서 받은 날짜 문자열을 'YYYY-MM-DD' 형식으로 포맷하는 함수
 * @param {string} string - 포맷할 날짜 문자열 (ISO 8601 형식 권장)
 * @returns {string} - 'YYYY-MM-DD' 형식의 날짜 문자열. 유효하지 않은 날짜의 경우 빈 문자열 반환.
 */
export const formatDateFromAPIToYYYYMMDD = (string: string = "") => {
    // 입력된 날짜 문자열로 Date 객체 생성
    const inputDate = new Date(string);

    // 입력된 날짜가 유효하지 않으면 빈 문자열 반환
    if (isNaN(inputDate.getTime())) return "";

    // 연도, 월, 일 정보를 추출
    const year = inputDate.getFullYear(); // 연도를 4자리 숫자로 가져옴
    const month = String(inputDate.getMonth() + 1).padStart(2, "0"); // 월을 2자리 문자열로 포맷 (1월 = 0, 2월 = 1, ...)
    const day = String(inputDate.getDate()).padStart(2, "0"); // 일을 2자리 문자열로 포맷

    // 'YYYY-MM-DD' 형식으로 포맷된 문자열을 반환
    return `${year}-${month}-${day}`;
};
