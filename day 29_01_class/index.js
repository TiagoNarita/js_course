//the filter() method is a built-in array method in javascript taht allows you to
// create a new array containing elements that pass a certain condition. It provides
//a cleam and concise way to filter out elements from an array based on a specified criteria.

const songs = [
    { name: "Lucky you", duration: 4.34 },
    { name: "bin laden", duration: 3.23 },
    { name: "baby", duration: 2.33 },
    { name: "fuck you", duration: 5.34 },
];

console.log(songs.filter((song) => song.duration > 3));

const computers = [
    { ram: 4, hdd: 100 },
    { ram: 8, hdd: 200 },
    { ram: 16, hdd: 300 },
    { ram: 32, hdd: 400 },
];

console.log(computers.filter((com) => com.ram >= 16));

const ages = [32, 33, 16, 40];

console.log(ages.filter(age => age > 18));



