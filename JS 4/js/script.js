/* 1. Дана строка, изображающая целое число. Вывести сумму цифр этого числа. */
let str = prompt ("Введите целое число");
let sum = 0;
for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
}
alert("Сумма цифр числа равна: " + sum);

/* 2. Дана строка и символ. Удвоить каждое вхождение заданного символа в строку. */
let str1 = prompt ("Введите произвольный набор символов:");
let sym = prompt ("Выберите символ из предыдущей строки и введите его:");
let str2 = "";
for (let i = 0; i < str1.length; i++) {
    if (str1[i] === sym) {
        str2 += str1[i] + sym
    } else str2 += str1[i];
}
alert("Новая строка: " + str2);


/* 3. Проверить что введенный пароль удовлетворяет
следующим условиям сложности:
- длинна от 9 символов;
- содержит обязательно английские буквы верхнего и нижнего регистра;
- содержит более двух цифр;
- содержит обязательно один из неалфавитных символов (например, !, $, #, %). */
let pas = prompt ("Введите пароль:");

let regExp = /(?=.*[0-9A-Fa-f])(?=.*[!@#$%^&*])(?=(.*\d{3,})){9,}/g;

if (regExp.test(pas)) {
    alert("Пароль удовлетворяет условиям.");
} else {
    alert("Пароль не удовлетворяет условиям.");
}
