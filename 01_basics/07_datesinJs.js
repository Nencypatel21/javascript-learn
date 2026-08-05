let myDate = new Date()
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2026,0,23)
// let myCreatedDate = new Date(2026,0,23,5,3)
// let myCreatedDate = new Date("2026-01-14")
let myCreatedDate = new Date("01-14-2026")
// console.log(myCreatedDate.toLocaleString());

let myTimeStsmp = Date.now()
// console.log(myTimeStsmp);
// console.log(myCreatedDate.getTime()); // can compare two dates
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 1);

// `${newDate.getDay()}`

newDate.toLocaleString('default',{
    weekday : "long",
})