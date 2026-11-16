let n1 = Number(prompt("Введите первое число:"));
let n2 = Number(prompt("Введите второе число:"));
let n3 = Number(prompt("Введите третье число:"));

let max = n1;
if (n2 > max) {
    max = n2;
}
if (n3 > max) {
    max = n3;
}
console.log(max);