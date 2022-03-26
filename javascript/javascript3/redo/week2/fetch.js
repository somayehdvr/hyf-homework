//3 steps below using promises and .then
/////////////////////////////////////////////////
new Promise(resolve =>
    setTimeout(() => {
        fetch('https://yesno.wtf/api')
            .then(result => result.json())
            .then(data => resolve(data.answer))
    }, 3000)
).then(response => console.log(response))

//3 steps below using async/await
////////////////////////////////////////////////
async function yesNo() {
    try {
            setTimeout(async () => {
            const result = await fetch('https://yesno.wtf/api')
            const data = await result.json()
                console.log(data.answer)
                return
        }, 3000)
    } catch (error) {
        throw('async not successfull')
    }
}

yesNo()
