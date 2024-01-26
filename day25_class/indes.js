let person = {
    name: "Narita",
    age: 20,
    gender: "Male"
}

let clone = [{...person, profission: "Programer"}, "oi"]

console.log(clone);

function f(){
    return[1,2]
}

let a, b
[a,b] = f();
console.log(a);
console.log(b);

const colors = ['green','red',"blue","yellow","orange"];
let color1, color2, color3
[color1, color2, color3] = colors
console.log(color1);

 