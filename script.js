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
// let text1 = "Hello";
// let text2 = "World";
// if (text1 !== "" && text2 !== "") {
//   console.log("Обидва поля заповнені");
// } else {
//   console.log("Не всі поля заповнені");
// }
// let number1 = 5;
// let number2 = 8;
// let sum = number1 + number2;

// if (sum > 10) {
//   console.log("Сума більша за 10");
// } else {
//   console.log("Сума менша або дорівнює 10");
// }

// let text = "Мова програмування JavaScript дуже популярна";

// if (text.includes("JavaScript")) {
//   console.log("Текст містить слово JavaScript");
// } else {
//   console.log("Текст не містить слово JavaScript");
// }


// let number = 15;

// if (number > 10 && number < 20) {
//   console.log("Число входить в діапазон від 10 до 20");
// } else {
//   console.log("Число не входить в діапазон від 10 до 20");
// }


// let name = "Анна";
// let email = "anna@example.com";
// let password = "123456";

// let isNameValid = name.length >= 3;
// let isEmailValid = email.includes("@") && email.indexOf(".") > email.indexOf("@");
// let isPasswordValid = password.length >= 6;

// if (isNameValid && isEmailValid && isPasswordValid) {
//   console.log("Перенаправлення на іншу сторінку");
// } else {
//   console.log("Помилка: неправильне заповнення");
// }

// let drink = "Чай";

// switch (drink) {
//   case "Кава":
//     console.log("Ви обрали каву.");
//     break;
//   case "Чай":
//     console.log("Ви обрали чай.");
//     break;
//   case "Сік":
//     console.log("Ви обрали сік.");
//     break;
//   default:
//     console.log("Невідомий напій.");
// }


// let day = "Субота";

// switch (day.toLowerCase()) {
//   case "понеділок":
//   case "вівторок":
//   case "середа":
//   case "четвер":
//   case "п’ятниця":
//     console.log("Це робочий день.");
//     break;
//   case "субота":
//   case "неділя":
//     console.log("Це вихідний.");
//     break;
//   default:
//     console.log("Невідомий день тижня.");
// }


// let month = 4;

// switch (month) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("Зима");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Весна");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Літо");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Осінь");
//     break;
//   default:
//     console.log("Невірний номер місяця.");
// }


// let color = "жовтий";

// switch (color.toLowerCase()) {
//   case "червоний":
//     console.log("СТОП");
//     break;
//   case "зелений":
//     console.log("ЙТИ");
//     break;
//   case "жовтий":
//     console.log("Чекати");
//     break;
//   default:
//     console.log("Невідомий колір.");
// }


// let number1 = 10;
// let number2 = 0;
// let operator = "/";

// switch (operator) {
//   case "+":
//     console.log("Результат: " + (number1 + number2));
//     break;
//   case "-":
//     console.log("Результат: " + (number1 - number2));
//     break;
//   case "*":
//     console.log("Результат: " + (number1 * number2));
//     break;
//   case "/":
//     if (number2 === 0) {
//       console.log("Помилка: ділення на нуль!");
//     } else {
//       console.log("Результат: " + (number1 / number2));
//     }
//     break;
//   default:
//     console.log("Невідомий оператор.");
// }
// ===================================================================================HW-5=========================================================================================
// let i = 1
// while (i <= 10) {
//   console.log(i);
//   i++;
  
// }
// for (let i = 2; i <= 20; i += 2) {
 
  
//   if (i % 2 === 1) {
//     continue;
//   }
//   console.log(i);
  
// }

// for (let i = 1; i <= 10; i += 1) {
//   console.log(`7 x ${i} = ${7 * i }`);
  
// }
// let n = Number(prompt("Введіть число"));


// for (let i = 0; ; i++) {
//     if (i >= n) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 7 === 1) {
//     break;
//   }
//   console.log(i);
  
// }
let i = 1;
while (i <= 20) {
  if (i % 3 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
  
}
