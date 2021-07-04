const redMark = document.querySelector('ul.marks li:nth-child(1)')
const blueMark = document.querySelector('ul.marks li:nth-child(2)')
const greenMark = document.querySelector('ul.marks li:nth-child(3)')

function translateOneByOne() {
    moveElement(document.querySelector("li:nth-child(1)"),
    { x: 20 - redMark.offsetLeft, y: 300 - redMark.offsetTop })

    .then(() => moveElement(document.querySelector("li:nth-child(2)"),
    { x: 400 - blueMark.offsetLeft, y: 300 - blueMark.offsetTop }))

    .then(() => moveElement(document.querySelector("li:nth-child(3)"),
    { x: 400 - greenMark.offsetLeft, y: 20 - greenMark.offsetTop }))
}

translateOneByOne()

function translateAllAtOnce() {
    moveElement(document.querySelector("li:nth-child(1)"),
        { x: 20 - redMark.offsetLeft, y: 300 - redMark.offsetTop });
    
    moveElement(document.querySelector("li:nth-child(2)"),
        { x: 400 - blueMark.offsetLeft, y: 300 - blueMark.offsetTop });
    
    moveElement(document.querySelector("li:nth-child(3)"),
        { x: 400 - greenMark.offsetLeft, y: 20 - greenMark.offsetTop });
}

//translateAllAtOnce()