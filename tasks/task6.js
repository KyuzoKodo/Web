function merge_obj(arrKeys, arrValues) {
    const mergedObject = {};
  for (let i = 0; i < arrKeys.length; ++i)
  if (arrKeys[i] !== undefined) 
  mergedObject[arrKeys[i]] = arrValues[i];
  
  return mergedObject;
}
  
  
  function revert_obj(objecto) {
  const keys = []
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
/* Was passiert hier genau? Ich dachte zuerst, dass die 2 Arrays automatisch auf split_keys, split_values
initzalisiert werden. Mal abgesehen davon, dass ich daran zweifle. dass dies überhaupt möglich ist, wurden split_keys, split_values gar nicht deklariert?!
*/



console.log(split_keys.toString())
console.log(split_values.toString())


/* Da ich davon ausgehe, dass ein 2D Array zurückgegeben wird, habe ich es in die Variable gepackt.
Jetzt dachte ich könne mit den Index auf das erste Array zugreifen und es mit toString ausgeben.
Funktioniert auch nicht, mir sind die Ideen ausgegangen.
*/


