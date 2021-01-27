/* 
  Recreate the .push method without using .push
  
  Given an array and a new item, add the new item to the back of the array
  return the new length of the array

  What index are you adding a new item at?

  After finishing, finish the basic algos from yesterday that you did not finish.
*/

const arr1 = ["a", "b", "c"];
const newItem1 = "d";
const expected1 = 4;
// what arr1 should be after running push function
const expectedArr1 = ["a", "b", "c", "d"];

const arr2 = [];
const newItem2 = "a";
const expected2 = 1;
const expectedArr2 = ["a"];

/**
 * Adds the a given item to the given array.
 * - Time: O(1) constant. No loops so the size of the array doesn't increase
 *    the time our function will take.
 * - Space: O(1) constant.
 * @param {Array<any>} arr
 * @param {any} newItem
 * @return {number} The new length of the given array.
 */
function push(arr, newItem) {
  arr[arr.length] = newItem;
  return arr.length;
}

console.log(push(arr2, newItem2));

module.exports = { push };
