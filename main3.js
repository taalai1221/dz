const username = "admin";
const password = "123";

let inputUser = prompt("Введите username:");
let inputPass = prompt("Введите пароль:");

if (inputUser === username && inputPass === password) {
    console.log("Вы успешно вошли в систему");
} else {
    console.log("Некорректный username или пароль");
}