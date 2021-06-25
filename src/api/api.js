export async function getIPAdressInfo(ipAddress) {
    const apiUrl = `https://geo.ipify.org/api/v1`;
    const apiKey = `apiKey=${process.env.REACT_APP_API_KEY}`
    const ipOrDomain = `&domain=${ipAddress}`

    const url = `${apiUrl}?${apiKey}${ipOrDomain}`
    return fetch(url)
        .then(res => {
            if(res.status === 200)
                return res.json()
            else
                throw new Error('wrong input')
        })
}