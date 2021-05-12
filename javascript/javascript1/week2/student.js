const class07Students = [];

function addStudentToClass(studentName) {
    if (!studentName) {
        console.log("please enter your name")
        return
    }
    else{
        if(class07Students.length < 6 || studentName==("Queen")){
            if (class07Students.includes(studentName)){
                console.log(`Student ${studentName} is already in the class`)
                return
            }
            else{
                class07Students.push(studentName)
                return
            }
        }
        else{
            console.log("Cannot add more students to class 07")
            return
        }
    }
}

function getNumberOfStudents() {
    return class07Students.length
}

//Add some students to the class
addStudentToClass("Sam");
addStudentToClass("Erik");
addStudentToClass("Elena");
addStudentToClass("Joe");
addStudentToClass("Erik"); //Add a student that is already in the class
addStudentToClass("Sergey");
addStudentToClass("John");
addStudentToClass(""); //Add empty string
addStudentToClass("Nathan"); //Add more students than there is space for
addStudentToClass("Queen"); //Add the Queen to a full class

// Log out the students
console.log(class07Students);
//Get number of students
console.log(getNumberOfStudents()); 