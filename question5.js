function inverterString(str) {
  let inversa = '';
  for (let i = str.length - 1; i >= 0; i--) {
    inversa += str[i];
  }
  return inversa;
}

const stringOriginal = "Olá, Mundo!";
const stringInvertida = inverterString(stringOriginal);

console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
