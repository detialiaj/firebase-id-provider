export default class PostMessage {
    static #types = [
        'auth',
        'user'];

    static send(type, message) {
        if (!PostMessage.#types.includes(type)) throw `'${type}' must be one of ${PostMessage.#types.join(',')}`
        return window.postMessage(message)
    }
}