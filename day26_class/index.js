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

console.log(sum)

//the map() method creates a new array populated with the results of calling a 
//provided function on every elementi in the calling array.

numberus = [1, 2, 3, 4, 5];

let double = numberus.map(num => (num == 3 ? num * 2 : num));

console.log(double);

//transforming an object in array;

let peoples = [
    { firstName: "Tiago", secondName: "Narita" },
    { firstName: "Douglas", secondName: "mendes" },
    { firstName: "marcelo", secondName: "grossi" },
]

let result = peoples.map(peoples => {
    return [peoples.firstName, peoples.secondName]
})

console.log(result);

const numbers = [62, 44, 12, 4];

function myFunction(num) {
    return num * 10;
}

const newArraay = numbers.map(myFunction);
console.log(newArraay);
