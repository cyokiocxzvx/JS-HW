
// let age = 30;
// console.log(age);

// let name = "Дмитро";
// console.log(name);

// let isStudent = false;
// console.log(isStudent);

// let myString = "Майбутнє належить тим, хто вірить у красу своєї мрії.";
// console.log(myString);

// let myNumber = 20;
// myNumber += 10;
// console.log(myNumber);

// let myNull = null;
// console.log(myNull);

// let userName = prompt("Будь ласка, введіть ваше ім’я");
// alert("Вас звати: " + userName);
// console.log(typeof userName);

// let userAnswer = confirm("Ви справді бажаєте залишити цю сторінку?");
// console.log("Відповідь користувача: ", userAnswer);

// alert("Обережно! Це може бути ризиковано.");
// let confirmAction = confirm("Ви дійсно хочете продовжити?");
// console.log("Користувач підтвердив дію? ", confirmAction);

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log("Температура у Фаренгейтах:", fahrenheit);


let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log("Кількість годин у місяці:", hoursInMonth);
console.log("Кількість хвилин у місяці:", minutesInMonth);


let health = 100;
let energy = 80;
health -= 20;
energy -= 15;
console.log("Рівень здоров'я:", health);
console.log("Рівень енергії:", energy);


let totalPrice = 200;
let discount = 0.1;
let discountedPrice = totalPrice * (1 - discount);
console.log("Ціна після знижки:", discountedPrice);


const floatNumber = 12.78;
let roundedDown = Math.floor(floatNumber);
console.log("Округлене вниз число:", roundedDown);


const floatString = "45.67";
let parsedFloat = parseFloat(floatString);
console.log("Перетворене число:", parsedFloat);

// Перетворення рядка у ціле число
const intString = "123";
let parsedInt = parseInt(intString);
console.log("Перетворене ціле число:", parsedInt);

// Обчислення квадратного кореня числа
let number = 81;
let sqrtNumber = Math.sqrt(number);
console.log("Квадратний корінь числа:", sqrtNumber);

// Перетворення рядка у ціле число і навпаки
const integer = 42;
const stringNumber = "256";
let convertedInt = parseInt(stringNumber);
let convertedString = integer.toString();
console.log("Перетворене у ціле число:", convertedInt);
console.log("Перетворене у рядок:", convertedString);
