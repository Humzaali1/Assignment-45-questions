let car = 'subaru';
let car2 = 'Subaru';
let cars = ['subaru', 'Toyota', 'Honda'];

console.log("Is car.toLowerCase() == 'subaru'? I predict True.")
console.log(car.toLowerCase() == 'subaru');

console.log("Is car.toLowerCase() == 'SUBARU'? I predict False.")
console.log(car.toLowerCase() == 'SUBARU');

console.log("Is car == car2 ? I predict True.")
console.log(car == car2);

console.log("Is car == 'Toyota' ? I predict False.")
console.log(car == 'Toyota');

console.log("Is car != 'Toyota' ? I predict True.")
console.log(car != 'Toyota');

console.log("Is car > 'toyota' ? I predict False.")
console.log(car > 'toyota');

console.log("Is car < 'Tesla' ? I predict True.")
console.log(car < 'Tesla');

console.log("Is car > 'audi' ? I predict True.")
console.log(car > 'audi');

console.log("Is car.length == 6 ? I predict True.")
console.log(car.length == 6);

console.log("Is car[0] == 's'? I predict True.")
console.log(car[0] == 's');

console.log("Is car in cars ? I predict True.")
console.log(car in cars);

console.log("Is 'Bmw' in cars ? I predict False.")
console.log('Bmw' in cars);

console.log("Is car[0] === 's' and car[car.length - 1] === 'r' ? I predict True.")
console.log(car[0] === 's' && car[car.length - 1] === 'r');

console.log("Is car[0] === 'z' or car[car.length - 1] === 'z' ? I predict False.")
console.log(car[0] === 'z' || car[car.length - 1] === 'z');