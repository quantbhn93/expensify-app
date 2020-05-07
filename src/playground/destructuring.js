// // ======= Object destructuring ====== //
// const person = {
//   name: 'Quan',
//   age: 20,
//   location: {
//     city: 'Ha Noi',
//     temp: 20
//   }
// };

// // const name = person.name;
// // const age = person.age;

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}`);

// const { name: firstName = 'Anonymous', age: theAage } = person;
// console.log(`Firstname is ${firstName}, Age is ${theAage}`);

// const { city, temp: temprature } = person.location;
// if (city && temprature) {
//   console.log(`It's ${temprature} in ${city}`);
// }

const address = ['Vinh Quynh', 'Thanh Tri', 'Ha Noi'];
const [street, city, state] = address;
const [, justCity = 'Default city'] = address; // skip the first item in array
const [street2, , state2] = address;
console.log(`You are in ${street}, ${justCity}, ${state} `);
