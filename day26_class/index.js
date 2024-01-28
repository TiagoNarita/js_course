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
