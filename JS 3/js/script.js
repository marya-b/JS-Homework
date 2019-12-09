/* 1. Заданы два массива
A = [ 12, 4, 3, 10, 1, 20 ]
B = [-3, -7, -100, -33]
необходимо их объединить в один массив C, добавив массив B в конец(в начало) A. */

let arrA = [12, 4, 3, 10, 1, 20];
let arrB = [-3, -7, -100, -33];
let arrC = arrA.concat(arrB);
console.log(arrC);

/* 2. Одномерным массивом задана доска 3 на 3
var area = [ null, null, null, null, null, null, null, null, null ]
Необходимо сформировать и вывести (document.write) игровое поле состоящее из квадратов для крестиков-ноликов  в HTML.
При появлении в массиве 0-ля рисовать нолик , 1-цы крестик
Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик. */

/*
let area = [1, null, 0, null, 1, null, null, null, null];
for (let i = 0; i < area.length; i++) {
    if (area[i] === 0) {
        document.write("<td>0</td>");
    } else if (area[i] === 1) {
        document.write("<td>X</td>");
    }  else {
        document.write("<td> </td>");
    }
}
*/

/* 3. Задан массив  - [12,4,3,10,1,20].
Удалить из него наименьшее и наибольшее значение. */

let arr = [12,4,3,10,1,20];
let minNum = arr[0], maxNum = arr[0], max = 0, min = 0 ;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
        maxNum = arr[i];
        max = i;
    } else if (arr[i] > maxNum) {
        minNum = arr[i];
        min = i;
    }
}
console.log(minNum, maxNum, min, max);
arr.splice(min, 1);
arr.splice(max, 1);
console.log(arr);

/* 4*. В городе N проезд в трамвае осуществляется по бумажным отрывным билетам.
Каждую неделю трамвайное депо заказывает в местной типографии рулон билетов
с номерами от 000001 до 999999.
«Счастливым» считается билетик у которого сумма первых трёх цифр номера равна
сумме последних трёх цифр, как, например, в билетах с номерами 003102 или 567576.
Трамвайное депо решило подарить сувенир обладателю каждого счастливого билета и
теперь раздумывает, как много сувениров потребуется.
С помощью программы подсчитайте сколько счастливых билетов в одном рулоне. */
/*
let present = 0;
for (let i = 0; i <= 999; i++) {
    let ticket = i.toString();
    ticket.length = 6;
    let right, left, t;
    if (i < 10) {
        t = '00' + i;
    } else if ((i >= 10)&&(i < 100)) {
        t = '0' + i;
    } else {
        t = i.toString();
    }
}
 */
