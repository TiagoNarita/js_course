/*the every() method tests wheter all elements in the array pass the condition specified
by the provided callback function. It retuns true if the callback function returns true
for every element, and false if any elements fails the condition.*/

const peoples = ["huxn3", "jordh", "alex"];

const res1 = peoples.every((people) => people.length === 4);
const res2 = peoples.some((people) => people.length <= 4);
console.log(res1);
console.log(res2);

products = [
    { nome: "checkers", category: "toys" },
    { nome: "harry", category: "books" },
    { nome: "iphone", category: "eletronics" },
    { nome: "learn php", category: "books" },
];

const allProductsBooks = products.every(
    (products) => products.category == "books"
);
console.log(allProductsBooks);

/*The reduce() method applies the reducer function to each element of an array, 
accumulating the results into a single value. Its is often used to perform calculations'
or aggregation on arrays elements and simplify the array into a single value. */

const numbers = [1, 2, 3, 4, 5];

const num = numbers.reduce((p, c) => {
    console.log(`Previous: ${p}`);
    console.log(`Current: ${c}`);
    return p + c;
}, 5);
//this zero is the current value
console.log(num);
