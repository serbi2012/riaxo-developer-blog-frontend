/**
 * 데이터 URI를 파일 객체로 변환하는 함수
 * @param {string} dataURI - 변환할 데이터 URI 문자열
 * @returns {File} - 생성된 파일 객체
 */
export const dataURItoFile = (dataURI: string) => {
    // 데이터 URI에서 Base64 인코딩된 문자열을 추출
    const byteString = atob(dataURI.split(",")[1]);

    // 데이터 URI에서 MIME 타입 문자열을 추출
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    // 문자열을 처리하기 위한 ArrayBuffer를 생성
    const ab = new ArrayBuffer(byteString.length);

    // ArrayBuffer를 위한 Uint8Array를 생성하여 byteString의 각 바이트를 복사
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // ArrayBuffer로부터 Blob 객체 생성
    const blob = new Blob([ab], { type: mimeString });

    // Blob 객체를 사용하여 File 객체 생성
    // 파일 이름은 'uploadImage'로 설정하며 MIME 타입은 추출한 mimeString을 사용
    return new File([blob], "uploadImage", { type: mimeString });
};
