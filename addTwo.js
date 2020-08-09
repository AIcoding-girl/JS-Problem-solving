// add two to every number in array
function addTwoToEveryNumberInTheList (list) {
    const newList = [];
  
    for (let i = 0; i < list.length; i++) {
      newList.push(list[i] + 2);  // push() method adds one or more elements to the end of an array and returns the new length of the array
    }
    
    console.log(newList);
    return newList;
  }

  // test values in array
  addTwoToEveryNumberInTheList([1,2,3,5,6,9]);