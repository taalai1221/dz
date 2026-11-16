let sum = Number(prompt("Введите сумму покупки:"));

if (sum > 5000) {
    let discounted = sum - (sum * 0.10);
    console.log(discounted);
} else {
    console.log(sum);
}