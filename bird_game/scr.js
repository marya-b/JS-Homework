let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let bird = new Image();
let bg = new Image();
let gr = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();
let pn = new Image();

bird.src = "image/bird.png";
bg.src = "image/bg.png";
gr.src = "image/gr.png";
pipeUp.src = "image/pn.png";
pipeBottom.src = "image/cloud.png";
//pn.src = "image/pn.png";

let score = 0;

// Позиция птички
let xPos = 10;
let yPos = 150;
let grav = 1; //гравитация

let gap = 40; //расстояние между облаками


// При нажатии на какую-либо кнопку птичка подлетает вверх
function moveUp() {
 yPos -= 20;
}
document.addEventListener("keydown", moveUp);


// Создание блоков
let pipe = [];
pipe[0] = {
 x : cvs.width,
 y : 0
}

//Рисование
function draw() {
 ctx.drawImage(bg, 0, 0, 500, 500);

 for(let i = 0; i < pipe.length; i++) {
 ctx.drawImage(pipeUp, pipe[i].x + 70, pipe[i].y);
 ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

 pipe[i].x--; //передвижение блока по оси

 if(pipe[i].x == 100) { // повторение блока при прохождении этой позиции
 pipe.push({
 x : cvs.width, //появление за экраном
 y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height + 60
}); //случайная генерация положения расстояния между блоками
 }

 // Отслеживание прикосновений
 if(xPos + bird.width >= pipe[i].x
 && xPos <= pipe[i].x + pipeUp.width
 && (yPos <= pipe[i].y + pipeUp.height - 60
 || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - gr.height) {
     location.reload(); // Перезагрузка страницы
 }

 //Подсчёт очков
 if(pipe[i].x == 5) {
 score++;
 }
 }

 ctx.drawImage(gr, 0, cvs.height - gr.height, 500, 130);
 ctx.drawImage(bird, xPos, yPos, 40, 40);

 yPos += grav;

 ctx.fillStyle = "#000";
 ctx.font = "25px Arial";
 ctx.fillText("Съедено ананасов: " + score, 10, cvs.height - 20);


 requestAnimationFrame(draw); //анимация
 }

 pipeBottom.onload = draw;
