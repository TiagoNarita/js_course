//for in in a array 

let list = ["one", "two", "three", "four"]

for (let index in list) {
    console.log(`${list[index]}`);
    console.log(index);
    console.log(list);
}

//for off generly used for arrays
let text = "hello";

for (const letras of text) {
    console.log(letras);
}

list = ["one", "two", "three", "four"]

for (const numbers of list) {
    console.log(numbers);
}

//for each

let colors = ["white", "blue", "red", "green"];

colors.forEach(color => console.log(color));
console.log(colors);

colors = colors.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
});

console.log(colors);

let numberus = [1, 2, 3, 4, 18];
let sum = 0;

const add = (number) => {
    sum += number;
}

numberus.forEach(add)

console.log(sum);

//the map() method creates a new array populated with the results of calling a 
//provided function on every elementi in the calling array.

numberus = [1, 2, 3, 4, 5];

let double = numberus.map(num => num * 2);

console.log(double);

