document.querySelector(".submitGifWordButton").addEventListener("click", () => fetchGifAndShow())


function fetchGifAndShow() {

    let gifWord = document.querySelector('.gifWord').value
    if (!gifWord) { gifWord = "dog" }

    let limitGifNumber = document.querySelector('.limitGifNumber').value
    if (!limitGifNumber) { limitGifNumber = 3 }

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=KV1LXsbBYQmH1VEYZqM65HZdwRt9U0fT&q=${gifWord}&limit=${limitGifNumber}&offset=0&rating=g&lang=en`)
        .then(response => response.json())
        .then(gifData => {
            const gifDataDiv = document.querySelector(".gifDataDiv")
            gifDataDiv.innerHTML = ``
            for (let i = 0; i < limitGifNumber; i++) {
                gifDataDiv.innerHTML += `<img src="${gifData.data[i].images.fixed_width.url}"> <br />`
            }
        })
}