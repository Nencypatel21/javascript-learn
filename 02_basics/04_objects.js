// const tinderUser = new Object() // singleton object
const tinderUser = {}   // non-single ton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = "false"

// console.log(tinderUser);

const regularUser = {
    email : "some@google.com",
    fullname : {
        userfullname : {
            firstname : "Nency",
            lastname : "Patel"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3 : "a",
    4 : "b"
}
const obj4 = {
    5 : "a",
    6 : "b"
}
// const obj3 ={ obj1, obj2}  // nested object will be created
// const obj3 = Object.assign(obj1,obj2,obj4) //obj1 will be considered as target ans will be changed even though we are placing new values in obj3
const obj3 = Object.assign({},obj1,obj2,obj4) // {} is now new target and all other object will treated as source
console.log(obj3);
console.log(obj1);
console.log(obj3 == obj1);

const obj10 = { ...obj1, ...obj2}
console.log(obj10);

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {},
    {},
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

const {courseInstructor : instructor} = course  // destructure

console.log(instructor);
console.log(typeof instructor);

// const navbar = ( {company}) => {
//     console.log(company);
//     company = "efg"
//     console.log(company);
    
    
// }
// navbar({company : "abc"});


// JSON structure
// {                                 
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

// Array structure
// [
//     {},{},{}  
// ]