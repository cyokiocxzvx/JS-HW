// ============================================================================================HW-1==========================================================================
// // let age = 30;
// // console.log(age);

// // let name = "Дмитро";
// // console.log(name);

// // let isStudent = false;
// // console.log(isStudent);

// // let myString = "Майбутнє належить тим, хто вірить у красу своєї мрії.";
// // console.log(myString);

// // let myNumber = 20;
// // myNumber += 10;
// // console.log(myNumber);

// // let myNull = null;
// // console.log(myNull);

// // let userName = prompt("Будь ласка, введіть ваше ім’я");
// // alert("Вас звати: " + userName);
// // console.log(typeof userName);

// // let userAnswer = confirm("Ви справді бажаєте залишити цю сторінку?");
// // console.log("Відповідь користувача: ", userAnswer);

// // alert("Обережно! Це може бути ризиковано.");
// // let confirmAction = confirm("Ви дійсно хочете продовжити?");
// // console.log("Користувач підтвердив дію? ", confirmAction);
// ============================================================================================HW-2===============================================================================
// let celsius = 25;
// let fahrenheit = (celsius * 9/5) + 32;
// console.log("Температура у Фаренгейтах:", fahrenheit);

// let daysInMonth = 30;
// let hoursInMonth = daysInMonth * 24;
// let minutesInMonth = hoursInMonth * 60;
// console.log("Кількість годин у місяці:", hoursInMonth);
// console.log("Кількість хвилин у місяці:", minutesInMonth);

// let health = 100;
// let energy = 80;
// health -= 20;
// energy -= 15;
// console.log("Рівень здоров'я:", health);
// console.log("Рівень енергії:", energy);

// let totalPrice = 200;
// let discount = 0.1;
// let discountedPrice = totalPrice * (1 - discount);
// console.log("Ціна після знижки:", discountedPrice);

// const floatNumber = 12.78;
// let roundedDown = Math.floor(floatNumber);
// console.log("Округлене вниз число:", roundedDown);

// const floatString = "45.67";
// let parsedFloat = parseFloat(floatString);
// console.log("Перетворене число:", parsedFloat);

// const intString = "123";
// let parsedInt = parseInt(intString);
// console.log("Перетворене ціле число:", parsedInt);

// let number = 81;
// let sqrtNumber = Math.sqrt(number);
// console.log("Квадратний корінь числа:", sqrtNumber);

// const integer = 42;
// const stringNumber = "256";
// let convertedInt = parseInt(stringNumber);
// let convertedString = integer.toString();
// console.log("Перетворене у ціле число:", convertedInt);
// console.log("Перетворене у рядок:", convertedString);

// ==============================================================================HW-3==========================================================================================
// const result = 5 + 5 + `5`;

// console.log(result);

// console.log(typeof(result));

// const email = "nikita@gmail.com";

// const mail = (email.length);

// console.log(mail);

// console.log(email.indexOf('@'));

// let word1 = "My";
// let word2 = "name";
// let word3 = "is";

// let fullName = `${word1} ${word2} ${word3} Viktor`;

// console.log(fullName);

// let userName = `Олександр`;
// let payment = 300;
// alert(`Дякуемо ${userName} До сплати ${payment} гривень`);

// =============================================================HW-4-===============================================================================
let text1 = "Hello";
let text2 = "World";
if (text1 !== "" && text2 !== "") {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}
let number1 = 5;
let number2 = 8;
let sum = number1 + number2;

if (sum > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

let text = "Мова програмування JavaScript дуже популярна";

if (text.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}


let number = 15;

if (number > 10 && number < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}


let name = "Анна";
let email = "anna@example.com";
let password = "123456";

let isNameValid = name.length >= 3;
let isEmailValid = email.includes("@") && email.indexOf(".") > email.indexOf("@");
let isPasswordValid = password.length >= 6;

if (isNameValid && isEmailValid && isPasswordValid) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}