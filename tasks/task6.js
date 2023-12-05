function merge_obj(arrKeys, arrValues) {
    const mergedObject = {};
  for (let i = 0; i < arrKeys.length; ++i)
  if (arrKeys[i] !== undefined) 
  mergedObject[arrKeys[i]] = arrValues[i];
  
  return mergedObject;
}
  
  
  function revert_obj(objecto) {
  let keys = []
    let values = []
    for(const key in objecto) {
      keys.push(key)
      values.push(objecto[key])
    }


   
    
    return [keys, values]
  
  }
  
  const list1 = ["key2", "key1", "key3"]
  const list2 = [2, 1, 3]
  
let mo ={}
mo =  merge_obj(list1, list2) 
console.log(mo)




 const [split_keys, split_values] = revert_obj(mo)




console.log(split_keys.toString())
console.log(split_values.toString())





