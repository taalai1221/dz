let checkNum = Number(prompt("Введите число:"));

if (checkNum % 2 === 0 || checkNum % 7 === 0) {
    console.log("Подходит");
} else {
    console.log("Не подходит");
}