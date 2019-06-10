function makeRequest(requestUrl, method = 'GET', bodyData = {}, headers = {}) {
    const body = Object.assign({}, bodyData);
    const fetchOptions = {method, headers};

    if (method !== 'GET') {
        fetchOptions.body = JSON.stringify(body);
        fetchOptions.headers['Content-Type'] = 'application/json';
    }

    return fetch(requestUrl, fetchOptions)
        .then(data => Promise.all([data.json(), data]).catch(() => Promise.all([{}, data])))
        .then(response => {
            const [data, httpResponse] = response;

            if (httpResponse.status === 401) {
                throw new Error(httpResponse.status);
            }

            if (httpResponse.status === 423) {
                throw new Error('423');
            }

            if (!httpResponse.ok || !data) {
                throw new Error(`Error code - ${httpResponse.status}`);
            }

            if (httpResponse.ok) {
                return data;
            }

            throw new Error(`Error code - ${httpResponse.status}`);
        });
}

export function apiData(requestUrl, bodyData = {}, method = 'GET') {
    const url = process.env.REACT_APP_API_URL + requestUrl;

    return makeRequest(url, method, bodyData);
}