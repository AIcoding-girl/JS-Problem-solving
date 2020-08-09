// sort a list of numbers into ascending order
// if you need more help, Google how to do bubble sort
// you can sort, if you want to write it by hand, use bubble sort or insertion sort

function sort(list) {

    var sortedList = list.sort(function(num1, num2) {
        if (num1 > num2) {
            return 1;
        } else if (num1 < num2) {
            return -1;
        }
        return 0;
    });

    // other way with sort()
    // var sortedList = list.sort(function(num1, num2) {
    //     return num1 - num2;
    // });

    // one-liner way
    // var sortedList = list.sort((a, b) => a - b);

    return sortedList;
}