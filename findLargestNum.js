// return the largest number in array
function findLargestNumber(list) {

    // if (list.length === 0) {
    //     return undefined;
    // }

    var largest = list[0];

    for (var count = 1; count < list.length; count++) {
        if (list[count] > largest) {
            largest = list[count];
        }
    }
    console.log(largest);
    return largest;
}

// test values
findLargestNumber([5,78,45,0,2,4]);