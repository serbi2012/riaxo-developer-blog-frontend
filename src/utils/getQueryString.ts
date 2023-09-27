export const getQueryString = () => {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    const queryObject: any = {};

    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");
        queryObject[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }

    return queryObject;
};
