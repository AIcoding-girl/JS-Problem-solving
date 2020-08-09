// return a list of all people who have the word "Engineer" in their jobTitle

function getAllEngineers(list) {

    var engineers = [];

    for (var count = 0; count < list.length; count++) {  // procedural, imperative programming
        if(person.jobTitle.includes('Engineer')) {
            engineers.push(person.name);
        }
    }

    // other way with filter and map (functional programming)
    // var engineers = list
    //     .filter(({ jobTitle }) => jobTitle.includes('Engineer'))
    //     .map(({ name }) => name);  OTHER way: .map((person) => { return person.name})

    return engineers;
}