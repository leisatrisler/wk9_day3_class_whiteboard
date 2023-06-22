
assert=require('assert');


// Problem: Flatten Array
// Write a function 
//  that takes in a nested array of integers and 
// returns a new array that contains all the integers 
// from the input array in a flattened format.

// Input: [1, [2, 3], [4, [5, 6]]]
// Output: [1, 2, 3, 4, 5, 6]

// Input: [[1, 2], [3, 4], [5, 6]]
// Output: [1, 2, 3, 4, 5, 6]

// Input: [1, 2, 3]
// Output: [1, 2, 3]

//=====================================
// Write your function named "solution" here:
function solution(arr) {
    let result = [];
  
    arr.forEach(element => {
      if (Array.isArray(element)) {
        result = result.concat(solution(element));
      } else {
        result.push(element);
      }
    });
  
    return result;
  }


//=====================================

try{

    
        assert.deepEqual(solution([1, [2, 3], [4, [5, 6]]]), [1, 2, 3, 4, 5, 6]);

        assert.deepEqual(solution([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6]);

        assert.deepEqual(solution([1, 2, 3]), [1, 2, 3]);

        assert.deepEqual(solution([1, [2, [3, [4]]], 5]), [1, 2, 3, 4, 5]);

        assert.deepEqual(solution([[1, [2, 3]], [4, [5, [6]]]]), [1, 2, 3, 4, 5, 6]);

        assert.deepEqual(solution([[1], [2], [3], [4], [5]]), [1, 2, 3, 4, 5]);

        assert.deepEqual(solution([]), []);


    console.log("PASSED")
}catch{
    console.log("FAILED")
}