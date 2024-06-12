const baseUrl = 'https://dummyjson.com/';

const httpGet = (endpoint) => fetch(baseUrl + endpoint);

function getAllData() {
    const requests = [httpGet('products'), httpGet('recipes')]

    return Promise.all(requests)
        .catch(err => console.log(err))
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(data => data)
}

getAllData().then(data => console.log(data))