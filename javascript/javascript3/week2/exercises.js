async function getYesNo() {
    const yesNoResponse = await fetch(
        "https://yesno.wtf/api"
    );
    const YesNo = await yesNoResponse.json();
    console.log(YesNo.answer);
    return YesNo;
}

getYesNo();


//2222///////////////
async function getError() {
    const errorResponse = await fetch(
        "https://knajskdskj.jasdk"
    ).catch((error) => console.log(error));
    const errorPrint = await errorResponse.json();
    console.log(errorPrint);
    return errorPrint;
}

getError();

//33333//////////////////////
/*
const timeoutPromise = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello! 4 second has passed');
    }, 4000);
});

timeoutPromise.then(timeoutData => {
    console.log(timeoutData); // '4 second has passed'
});


//3-2
const rejectPromise = new Promise((resolve, reject) => {
    const time = 1000;
    const succeed = false;
    const good = 'thats good';
    setTimeout(() => {
        if(succeed) {
            resolve(good);
        } else {
            reject('We got error');
        }
    }, time);
});

rejectPromise.then(good => {
    console.log(`Lets eat the ${good}`);
}).catch(error => {
    console.log(error);
})
*/

//444444444/////////////////
function getLoggedInUsers() {
    return new Promise((resolve, reject) => {
        const succeed = Math.round(Math.random());
        setTimeout(() => {
            if (succeed) {
                resolve(["benna", "magdy", "carolina"]);
            } else {
                reject('We have error');
            }
        }, 1000);
    })
};

getLoggedInUsers()
    .then(users => {
        console.log(users); // ['benna', 'magdy', 'carolina']
    }).catch(error => {
        console.log(error);
    });
