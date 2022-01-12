class user {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const user1 = new user('Somayeh', 'Davari')

console.log(user1)
console.log(user1.firstName)

console.log(user1.getFullName())

// Creating a CV class
function generateId() {
    return Math.floor(Math.random() * 10000)
}

class CV {
    constructor(email) {
      this.jobs = [];
      this.educations = [];
      this.email = email
    }
  
    addJob(job) {
        this.jobs.push(job);
    }
  
    removeJob(job) {
        this.jobs.pop(job);
    }
  
    addEducation(education) {
        this.educations.push(education);
    }
  
    removeEducation(education) {
        this.educations.pop(education);
    }

    renderCV() {
        const ul = document.createElement("ul")
        let li = document.createElement("li")
        const body = document.querySelector('body')
        
        li.innerHTML = this.email
        ul.appendChild(li)
        this.jobs.forEach(job => {

            li = document.createElement("li")
            li.innerHTML = job.id
            ul.appendChild(li)

            li = document.createElement("li")
            li.innerHTML = job.title
            ul.appendChild(li)
            
            li = document.createElement("li")
            li.innerHTML = job.description
            ul.appendChild(li)
        });

        body.appendChild(ul)
        console.log(body)
    }
}
  
class job {
    constructor(id, title, description, startDate, endDate) {
        this.id = id
        this.title = title
        this.description = description
        this.startDate = startDate
        this.endDate = endDate
    }
}

class education {
    constructor(id, title, school, address, startDate, endDate) {
        this.id = id
        this.title = title
        this.school = school
        this.address = address
        this.startDate = startDate
        this.endDate = endDate
    }
}

const myCV = new CV('somayehdvr@gmail.com')
const job1 = new job(generateId(), 'title', 'description', 'startDate', 'endDate')


myCV.addJob(job1)
console.log(myCV)

myCV.renderCV()
//setTimeout(() => { myCV.removeJob(job1);console.log(myCV) }, 5000 )






