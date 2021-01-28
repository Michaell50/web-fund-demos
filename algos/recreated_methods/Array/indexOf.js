/* 
  Given an array and an item to search for,
  return the index where the item is found,

  return -1 to represent not found
  */

const arr1 = ["a", "b", "c"];
const searchItem1 = "c";
const expected1 = 2;

const arr2 = ["a", "b", "c"];
const searchItem2 = 5;
const expected2 = -1;

const arr3 = ["c", "a", "b", "c"];
const searchItem3 = "c";
const expected3 = 0;

const arr4 = [];
const searchItem4 = 5;
const expected4 = -1;

/**
 * Finds the index from the given array where the given item is found.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @param {any} searchItem The item to find.
 * @return {number} The index of found item, or -1 if not found.
 */
function indexOf(arr, searchItem) {
  // code here
}