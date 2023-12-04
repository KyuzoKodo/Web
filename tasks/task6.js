function merge_obj(arrKeys, arrValues) {
    var rv = {};
  for (var i = 0; i < arrKeys.length; ++i)
  if (arrKeys[i] !== undefined) 
    rv[arrKeys[i]] = arrValues[i];
  
  return rv;
}
  
  
  function revert_obj(my_dict) {
    let keys = []
    let values = []
    for (const [key, value] of Object.entries(my_dict)) {
        keys = key
        values = value
    }
    
    return [keys, values]
    /* Die Funtkion gibt ein 2D Array zurück oder?
    */
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

let a = [ revert_obj(mo)]
console.log(a[0].toString)
/* Da ich davon ausgehe, dass ein 2D Array zurückgegeben wird, habe ich es in die Variable gepackt.
Jetzt dachte ich könne mit den Index auf das erste Array zugreifen und es mit toString ausgeben.
Funktioniert auch nicht, mir sind die Ideen ausgegangen.
*/


