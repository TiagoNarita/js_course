let person = {
    name: "Narita",
    age: 20,
    gender: "Male"
}

let clone = [{ ...person, profission: "Programer" }, "oi"]

console.log(clone);

function f() {
    return [1, 2]
}

let a, b
[a, b] = f();
console.log(a);
console.log(b);

const colors = ['green', 'red', "blue", "yellow", "orange"];
let color1, color2, color3
[color1, color2, color3] = colors
console.log(color1);

//the ternary operator in js

//condition ? expriftrue : exprisfalse;

function password(ps) {
    if (ps === 8) {
        return "Strong Password"
    } else {
        return "Your password shoudb be 8 characters"
    }
}

let res = password(2)
console.log(res);

//refactoring

let newPass = (ps) => {
    return ps === 8 ? "Strong Password" : "Your password shoudb be 8 characters"
}

res = newPass(2)
console.log(res)

let personMoney = true;

let havemoney = personMoney === true? "Buy Products": "You don`t have money"

console.log(havemoney);




person = {
    name: "Tiago",
    age: 20,
    college: "IFSP"
}

for (const characteristics in person) {
   console.log(`- ${characteristics}:${person[characteristics]}`);
}