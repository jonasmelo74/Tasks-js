const fs = require('fs');

const faturamento = JSON.parse(fs.readFileSync('./faturamento.json', 'utf-8'));

const diasComFaturamento = faturamento.filter(dia => dia.valor > 0);

const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
const mediaMensal = somaFaturamento / diasComFaturamento.length;

const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

console.log("Menor valor de faturamento:", menorFaturamento.toFixed(2));
console.log("Maior valor de faturamento:", maiorFaturamento.toFixed(2));
console.log("Número de dias acima da média mensal:", diasAcimaDaMedia);