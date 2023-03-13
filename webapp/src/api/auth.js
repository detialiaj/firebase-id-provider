const { API_PATH } = process.env;
const path = `${API_PATH}/auth`

export const requestCustomToken = async (accessToken) => {
    return new Promise(async (resolve, reject) => {
        let res = await fetch(`${path}/requestCustomToken`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        })
        if (res.ok) return resolve(res.json())
        return reject(await res.json())
    })
}