export interface CookieOptionsProps {
    expires?: number | Date; // 쿠키의 만료 시간. 숫자(일 단위) 또는 Date 객체.
    path?: string; // 쿠키가 유효한 경로. 기본값은 '/'.
    domain?: string; // 쿠키가 유효한 도메인. 기본값은 현재 도메인.
    secure?: boolean; // 쿠키를 HTTPS를 통해서만 전송할지 여부.
    sameSite?: "strict" | "lax" | "none"; // CSRF 공격 방지를 위한 쿠키의 SameSite 속성.
}

/**
 * 쿠키를 설정하는 함수
 * @param {string} name - 설정할 쿠키의 이름
 * @param {string} value - 쿠키에 설정할 값
 * @param {CookieOptionsProps} options - 쿠키 옵션 객체
 */
export const setCookie = (name: string, value: string, options: CookieOptionsProps = {}): void => {
    // 쿠키 문자열 초기화
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    // 쿠키 만료 시간 설정
    if (options.expires) {
        if (typeof options.expires === "number") {
            // 숫자로 주어진 경우, 현재 시간에서 지정된 일 수만큼 더해 만료 시간 계산
            const date = new Date();
            date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
            cookieString += `; expires=${date.toUTCString()}`;
        } else {
            // Date 객체로 주어진 경우, UTC 문자열로 변환하여 사용
            cookieString += `; expires=${options.expires.toUTCString()}`;
        }
    }

    // 쿠키 경로 설정
    if (options.path) {
        cookieString += `; path=${options.path}`;
    }

    // 쿠키 도메인 설정
    if (options.domain) {
        cookieString += `; domain=${options.domain}`;
    }

    // 쿠키 보안 설정 (HTTPS 전송 여부)
    if (options.secure) {
        cookieString += `; secure`;
    }

    // 쿠키 SameSite 속성 설정
    if (options.sameSite) {
        cookieString += `; samesite=${options.sameSite}`;
    }

    // 문서의 쿠키에 설정값 추가
    document.cookie = cookieString;
};

/**
 * 쿠키를 가져오는 함수
 * @param {string} name - 가져올 쿠키의 이름
 * @returns {string | null} - 해당 이름의 쿠키 값. 존재하지 않으면 null 반환.
 */
export const getCookie = (name: string): string | null => {
    // 인코딩된 쿠키 이름 생성
    const nameString = `${encodeURIComponent(name)}=`;
    // 쿠키 문자열을 세미콜론으로 분할하여 배열 생성
    const cookiesArray = document.cookie.split(";");

    // 배열을 순회하며 해당 이름의 쿠키 값 찾기
    for (let cookie of cookiesArray) {
        // 각 쿠키의 앞뒤 공백 제거
        cookie = cookie.trim();
        // 해당 이름으로 시작하는 쿠키 값이 있으면 디코딩하여 반환
        if (cookie.indexOf(nameString) === 0) {
            return decodeURIComponent(cookie.substring(nameString.length, cookie.length));
        }
    }

    // 쿠키가 존재하지 않을 경우 null 반환
    return null;
};

/**
 * 쿠키를 제거하는 함수
 * @param {string} name - 제거할 쿠키의 이름
 * @param {CookieOptionsProps} options - 쿠키 옵션 객체
 */
export const removeCookie = (name: string, options: CookieOptionsProps = {}): void => {
    // 쿠키 만료 시간을 과거로 설정하여 제거
    setCookie(name, "", { ...options, expires: -1 });
};
