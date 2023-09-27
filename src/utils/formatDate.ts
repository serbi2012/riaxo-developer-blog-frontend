export const formatDateFromAPIToYYYYMMDD = (string: string = "") => {
    const inputDate = new Date(string);

    if (isNaN(inputDate.getTime())) return "";

    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, "0");
    const day = String(inputDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};
