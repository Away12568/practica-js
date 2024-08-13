// let name = prompt('как тебя зовут');
// let age = prompt('сколько тебе лет');
// let city = prompt('в каком городеты живешь');

// alert(
//   ' привет ' + name + ' тебе ' + age + ' лет ' + ' ты живешь в ' + city + 'е'
// );

// let num1 = +prompt ("введите первое число ")
// let num2 = +prompt ("введите второе число ")

// if (num1 > num2) {
//    alert( "первое число больше")
// }

// else if ( num1 < num2) {
//    alert( "второе число больше")
// }
//  else if (num1 = num2) {
//    alert( "они равны")
//  }

//  else {"я сам хз че тут не так"}

// let num = Math.floor(Math.random() * 10);
// console.log(num);
// let guess = +prompt(' угодайчисло от 1 до 10');

// if (guess == 52) {
//   alert('да здраствует санк петербург');
// } else if (guess == num) {
//   alert('поздровляю ты угодал ');
// } else {
//   alert('ты не угодал! попробуй еше');
// }

// let num = +prompt('введи число');

// if (num % 2 == 0) {
//   alert('четное');
// } else {
//   alert('не четное ');
// }

// let a = +prompt('введи число');

// let b = +prompt('введи число');

// let multiply = (a, b) => {
//   alert(a * b);
// };

// multiply(a, b);

// let user = {
//   name: prompt('как тебя зовут '),
//   age: +prompt('Сколько тебе лет'),
// };

// console.log(user);

// let list = []

// for(let i = 1; i <= 3; i++) {
//    let product = prompt("введите продукт:")
//    list.push(product)
// }

// console.log(list);

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

let num1 = +prompt('введите первое число');

let num2 = +prompt('введите второе число');

let num3 = +prompt('введите третие число');

let max = num1

if (num2 > max) {
   num2 = max
}
if (num3 > max) {
   num3 = max
}
alert("максимальное число: " + max)