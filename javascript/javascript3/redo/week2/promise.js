function resolveAfterTime(resolveAfter) {
    return new Promise((resolve) => setTimeout(() => {
        resolve()
    }, resolveAfter * 1000)
    )
}

resolveAfterTime(8).then(() => {
    console.log("I am called asynchronously"); // logged out after 8 seconds
});

async function asyncResolve(resolveAfter) {
    console.log("Before we resolve data");
    const resolveResponse = await resolveAfterTime(resolveAfter)
    console.log(
        "This is logged out after some time, even though the code looks synchronous! 🤯"
    );
    return resolveResponse
}

asyncResolve(8).then(() => {
    console.log("I am called then"); // logged out after 8 seconds
});