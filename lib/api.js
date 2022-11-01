const API_URL = 'https://6331e3cf3ea4956cfb694be6.mockapi.io'

async function fetchAPI(endpoint = '') {
    const headers = { 'Content-Type': 'application/json' }

    const res = await fetch(API_URL + endpoint, {
        headers,
        method: 'GET',
    })

    const data = await res.json()
    if (data.errors) {
        console.error(data.errors)
        throw new Error('Failed to fetch API')
    }
    return data
}

export async function getAllJobCollection() {
    const data = await fetchAPI('/jobs')
    return data
}

export async function getJobDetail(id) {

    const data = await fetchAPI('/jobs/' + id)
    return data
}
