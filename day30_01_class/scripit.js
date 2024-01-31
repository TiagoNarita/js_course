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
