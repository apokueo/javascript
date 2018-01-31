// Example on global scope

//let user = {
//    name = "Jacob",
//    age  = 45,
//};

//function greet() {
//  console.log('Hello, ${user.name}!');
//}
//function getBirthYear() {
//  return new Date().getFullYear() - user.age;
//}

function greet(user){
    console.log(`Hello, ${user.name}!`);
}
function getBirthYear(user) {
    return new Date().getFullYear() - user.age;
}
