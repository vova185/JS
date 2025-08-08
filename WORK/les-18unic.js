function transformObjectToMap(obj) {
   const map = new Map();
   for (let key in obj) { 
   map.set(key, new Set(obj[key]));
   }
   return map;
}



const obj = {
	ones: [1,1,1,1,1,1,1,1,1,1,1,1,1,11,11,1111,11,1],
  twos: [2,2,2,2,2,2,2,2222,22,222222,222,2,2,2,22],
  threes: [3,33,3333,333,33,33,3,3333,33,3,3,3,3,3],
}

console.log(transformObjectToMap(obj));
