let char = prompt("Введите одну букву (a, e, i, o, u):").toLowerCase();
let isVowel = char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
console.log(isVowel);