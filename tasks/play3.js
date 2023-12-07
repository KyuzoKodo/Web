/**
* Merge two objects to a new one e.g. ({a: 1}, {b: 2}) => {a: 1, b: 2}
* If Key conflict, use the value of the second object
* Note: You are not allowed to use any Object builtin functions such as Object.keys
* Note: Using Object builtin functions will crash the test cases :P
* @param {Object} obj1
* @param {Object} obj2
* @return {Object}
*/
function mergeObject(obj1, obj2) {
  const mergedObject = { ...obj1, ...obj2};
    return mergedObject
  }