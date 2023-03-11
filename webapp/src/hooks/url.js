export const useParams = function () {
    const params = new URLSearchParams(window.location.search);
    return [...params].reduce((o, [k, v]) => ({ ...o, [k]: v }), {});
} 