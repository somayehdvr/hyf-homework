//Save a note
//+++++++++++++++++++++++++++++++++++++++++++
const notes = [];

function saveNote(content, id) {
  // write some code here
  notes.push({ content, id })
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

//Get a note
//+++++++++++++++++++++++++++++++++++++++++++
function getNote(id) {
    // your code here
    for (let i=0; i<notes.length; i++){
        if (notes[i].id === id){
            return notes[i]
        }
    }
  }
  
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}
  
//Log out notes
//+++++++++++++++++++++++++++++++++++++++++++
function logOutNotesFormatted() {
    // your code here
    for (let i = 0; i < notes.length; i++){
        console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`)        
    }
    return
  }
  
  logOutNotesFormatted(); // should log out the text below
  
  // The note with id: 1, has the following note text: Pick up groceries
  // The note with id: 2, has the following note text: Do laundry
  
//Unique feature
//+++++++++++++++++++++++++++++++++++++++++++
//change note with id
function changeNote(newContent, id) {
    // your code here
    for (let i=0; i<notes.length; i++){
        if (notes[i].id === id){
            notes[i].content = newContent
            return notes[i]
        }
    }
  }
  
  firstNote = changeNote("Pick up accessories", 1);
  console.log(firstNote); // {content: 'Pick up groceries', id: 1}