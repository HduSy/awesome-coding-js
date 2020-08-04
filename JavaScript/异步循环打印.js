function sleep(time, i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(i), time)
    })
}

async function start() {
    for (let i = 0; i < 10; i++) {
        let result = await sleep(1000, i)
        console.log(result)
    }
}

start()
