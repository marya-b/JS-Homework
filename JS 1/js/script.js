/* 1. На садовом участке площадью 10 соток, разбили грядки 15 на 25 метров.
Сколько м2 осталось незанято? */

let S = 10 * 100; //Площадь участка в квадратных метрах (=1000м2)
let Bet = 15  * 25; //Площадь 1 грядки (=375м2)
let SFree = S  %  Bet; //Незанятая грядками прощадь (1000/375=2, 1000-375*2=250м2)
console.log(SFree);

/* 2. Найдите площадь овального кольца, полученного из овала
площадью 15 дм2 вырезанием овала площадью 600 см2. */

let Oval1 = 15 * 100; // Площадь 1 овала в см2 (=1500см2)
let Oval2 = 600;
let Circle = Oval1 - Oval2; //Площадь кольца (=900см2)
console.log(Circle);

/* 3. Из трех данных чисел выбрать наименьшее.*/

let num1 = prompt("Введите 1 число:");
let num2 = prompt("Введите 2 число:");
let num3 = prompt("Введите 3 число:");

let min = Math.min(num1, num2, num3);
console.log(min);

/*4. Вывести в консоль ближайшее к 10 из двух чисел, записанных
в переменные m и n.
Например, среди чисел 8.5 и 11.45 ближайшее к десяти 11.45.*/

let m = parseFloat(prompt("Введите 1 число:"));
let n = parseFloat(prompt("Введите 2 число:"));

let m1 = (10-m); //Разница между 10 и числом m
let m2 = (m1 < 0) ? -m1 : m1; //Получившуюся разность делаем всегда положительной

let n1 = (10-n); //По аналогии, как с первым числом
let n2 = (n1 < 0) ? -n1 : n1;

let res = (m2 > n2) ? n : m; //Проверяем, какая из разностей меньше, и выводим её в результат 
console.log(res);


/*5*. Трёхмерное пространство:
Есть три вершины a, b и с. У каждой
вершина заданы координатами x, y, z как
целые числа. Нужно определить - является
ли треугольник с заданными координатами
прямоугольным. */
