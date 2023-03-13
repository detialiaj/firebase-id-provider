const { IFRAME_ORIGINS } = process.env;
export default class PostMessage {
    static #types = [
        'user',
        'out',
        'status',
        'customToken',
        "resetPassword"
    ];

    static send(type, message = '') {
        if (!PostMessage.#types.includes(type)) throw `'${type}' must be one of ${PostMessage.#types.join(',')}`
        return IFRAME_ORIGINS.forEach(origin => (window.self !== window.top) && window.parent.postMessage({ type, message }, origin))
    }
}
