

const oj1 = {
    a:"z",
    b:"y"
}

const oj2 = {
    z:"a",
    y:"b"
}

console.log(oj1) 

function swapObjectKeyValue(obj) {

    let swappedObj = {}

    for(let key in obj){
      swappedObj[obj[key]]=key
    }
  
    
    return swappedObj
}

  const swappedObj = {}
   = swapObjectKeyValue(oj1)
  console.log(swappedObj)
 
  