document.querySelector(".submitWord").addEventListener("click", () => printWeather())

function printWeather() {
    let word = document.querySelector(".word").value
    if (!word) {word = "cat"}
    
    let limit = document.querySelector(".limit").value
    if (!limit) {limit = 5}

    // Fetch giphy json data
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=KV1LXsbBYQmH1VEYZqM65HZdwRt9U0fT&q=${word}&limit=${limit}&offset=0&rating=g&lang=en`)
        .then(response => response.json())
        .then(giphyData => {
            console.log(giphyData);
            const giphy = document.querySelector(".giphy")
            for (let i = 0; i < limit; i++) {
                giphy.innerHTML += `<img src="${giphyData.data[i].images.fixed_width.url}"> <br />`
            }
        });
}
