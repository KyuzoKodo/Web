let fullArr = [1,2,3,4]
let filterOut = [2,4]

function filter(arr, filter_out) {

  let filterd_arr = arr.filter(function(arrNumbers) {
    return !filter_out.includes(arrNumbers);
  });
  return filterd_arr
}
  
let testArray = []
testArray = filter(fullArr, filterOut)
console.log(testArray)






// let finalArr = filter(fullArr,filterOut)

/*
function filter(arr, filter_out) {
    let filterd_arr = arr
    let perfectArr= []
  for(let i=0; i<filter_out.length; i++) {
    for(let j=0;j<arr.length;j++)
            {
                if(filter_out[i]==arr[j]){
                 console.log(filter_out[i] + "ist gleich" + arr[j])
                 delete filterd_arr[j]
                 perfectArr.push[filterd_arr[i]]
                 
                }
                }
  }
   console.log(filterd_arr)
}

filter(fullArr, filterOut)
// FinalArr = filter(fullArr, filterOut)
// console.log(FinalArr)
*/