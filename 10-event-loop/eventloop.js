function getRandomNumber() {
    return new Promise((resolve, reject) => {
        const rand = Math.floor(Math.random() * (10 - 1) + 1);

        setTimeout(() => {
            if (rand <= 5) {
                resolve(`Congrats: ${rand}`)
            }
            else {
                reject(new Error(`Regrets: ${rand}`))
            }
        }, rand * 1000)
    })
}

getRandomNumber().then(res => console.log(res)).catch(err => console.error(err))