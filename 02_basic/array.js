

const myArr = [1, 2 , 4, 5, 0]
// const myHeros = ['Batman', 'superman', 'spiderman']

// myarray(0)
// myHeros.includes
// console.log(myHeros.includes('Batman')) // this check weather the given character is inserted there or not
// shallow copy vs // deep copy





let myArr1= myArr.slice(1,4)
console.log(myArr)
console.log("A", myArr1)

let myArr2= myArr.splice(1,4)
console.log(myArr)
console.log("B",myArr2)

//Output of slice and splice
/*
[ 1, 2, 4, 5, 0 ]
A [ 2, 4, 5 ]
[ 1 ]
B [ 2, 4, 5, 0 ]
*/