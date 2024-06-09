//1. Посчитать максимум и минимум массива:
const arr1 = [1, 6, -1, 22, 13];
const max = Math.max(...arr1);
const min = Math.min(...arr1);
console.log("Максимум:", max);
console.log("Минимум:", min);

//2. Перевернуть строку задом наперёд:
const str = "!тевирП";
const reversedStr = str.split("").reverse().join("");
console.log("Перевернутая строка:", reversedStr);

// Перевернуть введенную пользователем строку задом наперед.
const userInput = prompt("Введите строку:");
const reversedUserInput = userInput.split("").reverse().join("");
console.log("Перевернутая пользовательская строка:", reversedUserInput);

//3. Вычислить сумму квадратных корней для всех чётных чисел целочисленного массива:
const arr2 = [3, 5, 8, 13, 21, 42];
const sumOfSquareRoots = arr2.filter(num => num % 2 === 0).reduce((acc, cur) => acc + Math.sqrt(cur), 0);
console.log("Сумма квадратных корней чётных чисел:", sumOfSquareRoots);

//4. Написать функцию, которая проверяет, являются ли две строки анаграммой:
function anagram(str1, str2) {
   const sortedStr1 = str1.toLowerCase().split('').sort().join('');
   const sortedStr2 = str2.toLowerCase().split('').sort().join('');
   return sortedStr1 === sortedStr2;
}

console.log(anagram("Лунь", "нуль")); // true
console.log(anagram("Лунь", "ноль")); // false

//5. Написать функцию, которая проверяет, является ли строка палиндромом:
function palindrome(str) {
   const reversedStr = str.toLowerCase().replace(/[^а-яa-z0-9]/g, '').split('').reverse().join('');
   return str.toLowerCase().replace(/[^а-яa-z0-9]/g, '') === reversedStr;
}

console.log(palindrome("Не гни папин ген")); // true
console.log(palindrome("123")); // false

//6. Написать функцию, которая после вызова каждую секунду пишет в консоль очередное число Фибоначчи:
function fibonacci() {
   let a = 0;
   let b = 1;
   console.log(a);
   console.log(b);
   setInterval(() => {
      const c = a + b;
      console.log(c);
      a = b;
      b = c;
   }, 1000);
}

fibonacci();

//7. Написать функцию`intersect(arrA, arrB)`, принимающую на вход два массива и возвращающую пересечение значений этих массивов:
function intersect(arrA, arrB) {
   return arrA.filter(val => arrB.includes(val));
}

console.log(intersect([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

//8. Написать HTML и JS - код, который рисует кнопки "+" и "-" и значение, уменьшающееся или увеличивающееся при нажатии.
[optional.html]

//9. Что выведет этот код ? Как сделать так, чтобы он вывел 1, 2, 3 ?
let i;
for (i = 1; i <= 3; i++) {
   setTimeout(() => console.log(i), 1000);
}
// Выведет 4, 4, 4, так как переменная i будет иметь значение 4 после завершения цикла.
// Чтобы исправить это, нужно создать отдельное замыкание для каждой итерации цикла.
for (let i = 1; i <= 3; i++) {
   setTimeout(() => console.log(i), 1000);
}