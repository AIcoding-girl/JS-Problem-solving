// get the average age of all the workers'

function getAverageAge(list) {
    var sum = 0;
    for (var count = 0; count < list.length; count++) {
        sum += list[count].age;
    }
    console.log(sum);
    console.log(list.length);
    console.log(sum / list.length);
    return sum / list.length;
}

// test example
var people = [
    {
        name: "Rafi Backe",
        jobTitle: "Research Assistant IV",
        age: 41
    },
    {
        name: "Gottfried Balser",
        jobTitle: "Mechanical Systems Engineer",
        age: 55
    },
    {
        name: "Lauraine Nore",
        jobTitle: "Assistant Media Planner",
        age: 61
    },
    {
        name: "Allayne Burstow",
        jobTitle: "Help Desk Technician",
        age: 48
    },
    {
        name: "Alan Tumber",
        jobTitle: "Senior Developer",
        age: 23
    }
];

getAverageAge(people);