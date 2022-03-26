class UserClass {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName() {
        return this.firstName + " " + this.lastName
    }
}

let User1 = new UserClass("Somayeh", "Davari")

console.log(User1)
console.log(User1.firstName)
console.log(User1.getFullName())

//3. Creating a CV class
///////////////////////////////////////////////////////////////////////
class CV {
    constructor(email) {
        this.jobs = [];
        this.educations = [];
        this.email = email
      }
    
      addJob(job) {
        this.jobs.push(job)
      }
    
    removeJob(job) {
        for (let i = 0; i < this.jobs.length; i++){
            if (this.jobs[i].id === job.id) {
                this.jobs.splice(i,1)
            }
        }
      }
    
      addEducation(education) {
        this.educations.push(education)
      }
    
      removeEducation(education) {
        for (let i = 0; i < this.educations.length; i++){
            if (this.educations[i].id === education.id) {
                this.educations.splice(i,1)
            }
        }
    }
    renderCV() {
        const renderDiv = document.getElementById("renderDiv")
        const header = document.createElement("h1")
        header.innerHTML = this.email
        renderDiv.appendChild(header)
        const jobHeader = document.createElement("h2")
        jobHeader.innerText = "Jobs"
        renderDiv.appendChild(jobHeader)

        for (let i = 0; i < this.jobs.length; i++){
            const jobDetail = document.createElement("p")
            jobDetail.innerHTML += this.jobs[i].id 
            jobDetail.innerHTML += "<br />"
            jobDetail.innerHTML += this.jobs[i].title
            jobDetail.innerHTML += "<br />"
            jobDetail.innerHTML += this.jobs[i].description 
            jobDetail.innerHTML += "<br />"
            jobDetail.innerHTML += this.jobs[i].startDate 
            jobDetail.innerHTML += "<br />"
            jobDetail.innerHTML += this.jobs[i].endDate
            renderDiv.appendChild(jobDetail)
        }

        const educationHeader = document.createElement("h2")
        educationHeader.innerText = "Educations"
        renderDiv.appendChild(educationHeader)

        for (let j = 0; j < this.educations.length; j++){
            const educationDetail = document.createElement("p")
            educationDetail.innerHTML += this.educations[j].id 
            educationDetail.innerHTML += "<br />"
            educationDetail.innerHTML += this.educations[j].title
            educationDetail.innerHTML += "<br />"
            educationDetail.innerHTML += this.educations[j].school 
            educationDetail.innerHTML += "<br />"
            educationDetail.innerHTML += this.educations[j].address
            educationDetail.innerHTML += "<br />"
            educationDetail.innerHTML += this.educations[j].startDate 
            educationDetail.innerHTML += "<br />"
            educationDetail.innerHTML += this.educations[j].endDate
            renderDiv.appendChild(educationDetail)
        }
    }
}

class Job {
    constructor(id, title, description, startDate, endDate) {
        this.id = id
        this.title = title
        this.description = description
        this.startDate = startDate
        this.endDate = endDate
    }
}

class Education {
    constructor(id, title, school, address, startDate, endDate){
        this.id = id
        this.title = title
        this.school = school
        this.address = address
        this.startDate = startDate
        this.endDate = endDate
    }
}

const JobTeacher = new Job(1, "teacher", "Teaches staff", "Jan", "Mar")
const JobTeacher2 = new Job(2, "teachers", "Teaches staff", "Jan", "Mar")
const EducationUni = new Education(1, "University", "University education", "ITU", "Copenhagen", "Jan", "June")
let myCV = new CV("Somayehdvr@gmail.com")
console.log([...myCV.jobs])

myCV.addJob(JobTeacher)
myCV.addJob(JobTeacher2)
myCV.addEducation(EducationUni)
console.log([...myCV.jobs])

myCV.removeJob(JobTeacher)
console.log([...myCV.jobs])

myCV.renderCV()