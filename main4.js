const q1 = "москва";
const q2 = "5";
const q3 = "зима";
const q4 = "javascript";
const q5 = "азия";

let score = 0;

let a1 = prompt("Вопрос 1: Столица России?").trim().toLowerCase();
let a2 = prompt("Вопрос 2: Сколько будет 2 + 3?").trim();
let a3 = prompt("Вопрос 3: Какое сейчас время года?").trim().toLowerCase();
let a4 = prompt("Вопрос 4: На каком языке программирования ты пишешь?").trim().toLowerCase();
let a5 = prompt("Вопрос 5: Самая большая часть света?").trim().toLowerCase();

if (a1 === q1) score++;
if (a2 === q2) score++;
if (a3 === q3) score++;
if (a4 === q4) score++;
if (a5 === q5) score++;

console.log(score);