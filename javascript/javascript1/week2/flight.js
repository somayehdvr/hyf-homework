function getFullname (firstname, surname, useFormalName, gender) {
    if (!firstname || !surname) {
        return "full name is missing";
    }
    else {
    if (useFormalName && (gender == "F")) {
        return "Lady "+firstname+ " " + surname;
    }
    else if (useFormalName && (gender == "M")) {
        return "Lord "+firstname+ " " + surname;
    }
    else {
        return firstname+ " " + surname;
    }
}
}

console.log(getFullname("", "Hughes", "true", "F"));
let fullname1, fullname2;
getFullname(fullname1, fullname2,"true", "F");
console.log(fullname1, fullname2);