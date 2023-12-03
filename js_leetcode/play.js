let fullArr = [1,2,3,4]
let filterOut = [2,4]
// let finalArr = filter(fullArr,filterOut)

function filter(arr, filter_out) {


    let filterd_arr = arr
  for(let i=0; i<filter_out.length; i++) {
    // console.log(filterOut[i])
    for(let j=0;j<arr.length;j++)
            {
                
                //console.log(arr[j])
                //logik

               
                if(filter_out[i]==arr[j]){
                   // filterd_arr.delete[arr[j]]
                 console.log(filter_out[i] + "ist gleich" + arr[j])
                 delete filterd_arr[j]
                }
                 

                }
  }
   console.log(filterd_arr)
  // return filterd_arr
}

filter(fullArr, filterOut)
// FinalArr = filter(fullArr, filterOut)
// console.log(FinalArr)