

let marvel_heros = ["Spider man","Bat man","Wonder Women"]
let dc_heros = ["batman","Wanda","Super man"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// this is not a good way to merge 
// This will create a problem in the array.

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);


const another_array = [1,2,3, [4,5,6], 7 ,8, [9,10,11]]

const real_another_array = another_array.flat(Infinity) 
console.log(real_another_array);


console.log((Array.isArray("Bipson"))); //output false
console.log((Array.isArray(['B','i','p','s','o','n']))); // output True


console.log(Array.from({name: "Bipson Mukhiya"})) // This will return a empty string.



console.log(Array.from("Mukhiya")); // this will print from where the array is extracted
let Score1 = 200
let Score2 = 300
let Score3 = 400
console.log(Array.of(Score1,Score2,Score3));

