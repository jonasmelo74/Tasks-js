// Valores de faturamento por estado
const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;

const totalFaturamento = sp + rj + mg + es + outros;

function calcularPercentual(estado, total) {
  return ((estado / total) * 100).toFixed(2) + '%';
}

const percentualSP = calcularPercentual(sp, totalFaturamento);
const percentualRJ = calcularPercentual(rj, totalFaturamento);
const percentualMG = calcularPercentual(mg, totalFaturamento);
const percentualES = calcularPercentual(es, totalFaturamento);
const percentualOutros = calcularPercentual(outros, totalFaturamento);

console.log(`SP: ${percentualSP}`);
console.log(`RJ: ${percentualRJ}`);
console.log(`MG: ${percentualMG}`);
console.log(`ES: ${percentualES}`);
console.log(`Outros: ${percentualOutros}`);
