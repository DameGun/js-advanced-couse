const baseUrl = 'https://dummyjson.com/';

const httpGet = (endpoint) => fetch(baseUrl + endpoint);

async function getAllData() {
    const requests = [httpGet('products'), httpGet('recipes')]

    return await Promise.all(requests);
}

console.log(getAllData())