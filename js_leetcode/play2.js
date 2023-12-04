

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

     let newObj = {}
     for (let [key, value] of Object.entries(obj)) {
         console.log(key, value);
         
     } 
 
     
         /*var newObj = {};
         for(var key in obj){
            console.log(obj[key])
           console.log(obj)
         }
         */
       
   }
  swapObjectKeyValue(oj1)
 
  