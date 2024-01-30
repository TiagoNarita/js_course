//the filter() method is a built-in array method in javascript taht allows you to
// create a new array containing elements that pass a certain condition. It provides
//a cleam and concise way to filter out elements from an array based on a specified criteria.

const songs = [
    { name: "Lucky you", duration: 4.34 },
    { name: "bin laden", duration: 3.23 },
    { name: "baby", duration: 2.33 },
    { name: "fuck you", duration: 5.34 },
];

console.log(songs.filter(song => song.duration >3);
