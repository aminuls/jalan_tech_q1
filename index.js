// This solution will have time complexity of O(2^n).
//

function findSumOfZero(arr) {
   let subsets = [[]];
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = subsets.length; j < len; j++) {
         subsets.push(subsets[j].concat(arr[i]));
      }
   }
   for (let i = 0; i < subsets.length; i++) {
      let subset = subsets[i];
      if (subset.length > 1 && subset.reduce((a, b) => a + b) === 0) {
         return subset;
      }
   }
   return "No Elements found";
}

console.log(findSumOfZero([-40, 10, 33, -1]));
