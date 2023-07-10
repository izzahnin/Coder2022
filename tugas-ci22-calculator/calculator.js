// Tugas Pelatihan Javascript
// Nurul Izzah Nurhidayat
// D121211103
num1 = 4;
num2 = 4;

function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function greatest(a, b, c, d) {
  if (a > b && a > c && a > d) {
    console.log("Hasil operasi terbesar adalah Penjumlahan sebesar", a);
  } else if (b > a && b > c && b > d) {
    console.log("Hasil operasi terbesar adalah Pengurangan sebesar", b);
  } else if (c > a && c > b && c > d) {
    console.log("Hasil operasi terbesar adalah Perkalian sebesar", c);
  } else {
    console.log("Hasil operasi terbesar adalah Pembagian sebesar", d);
  }
}

console.log(num1, "+", num2, "=", add(num1, num2));
console.log(num1, "-", num2, "=", substract(num1, num2));
console.log(num1, "*", num2, "=", multiply(num1, num2));
console.log(num1, "/", num2, "=", divide(num1, num2));

greatest(add(num1, num2), substract(num1, num2),multiply(num1, num2), divide(num1, num2));