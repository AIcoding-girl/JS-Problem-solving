function getListOfNames(list) {
    // list is an array of objects that looks like this
    // { name: "Some Person", jobTitle: "Boss Person", age: 30 }
    // return a list of all the workers' names

    var names = list.map(function (person) {
        return person.name;
    })

    // var names = list.map(({ name }) => name); other and shorter way: desctructuring

    // third way with for loop
    // var names = [];
    // for (var i = 0; i < list.length; i++) {
    //     var person = list[i];
    //     var name = person.name;
    //     names.push(name);
    //     OR in one line (previous three lines of code): names.push(list[i].name);
    // }

    return names;
}