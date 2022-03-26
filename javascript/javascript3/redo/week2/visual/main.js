const redMark = document.querySelector('ul.marks li:nth-child(1)')
const blueMark = document.querySelector('ul.marks li:nth-child(2)')
const greenMark = document.querySelector('ul.marks li:nth-child(3)')

function translateOneByOne() {
    moveElement(redMark,
        { x: 20 - redMark.offsetLeft, y: 300 - redMark.offsetTop }).then(() => {
        console.log("red element has been moved");
    })
        .then(() => moveElement(blueMark,
        { x: 400 - blueMark.offsetLeft, y: 300 - blueMark.offsetTop }).then(() => {
        console.log("blue element has been moved");
    }))
        .then(()=> moveElement(greenMark,
        { x: 400 - greenMark.offsetLeft, y: 20 - greenMark.offsetTop }).then(() => {
        console.log("green element has been moved");
    }))
}

function translateAllAtOnce() {
    const redPromise = moveElement(redMark,
        { x: 20 - redMark.offsetLeft, y: 300 - redMark.offsetTop })
    const bluePromise = moveElement(blueMark,
        { x: 400 - blueMark.offsetLeft, y: 300 - blueMark.offsetTop })
    const greenPromise = moveElement(greenMark,
        { x: 400 - greenMark.offsetLeft, y: 20 - greenMark.offsetTop })
    Promise.all([redPromise, bluePromise, greenPromise])
    .then(() => console.log('all elements have been moved at the same time!'))
}

translateOneByOne()
//translateAllAtOnce()