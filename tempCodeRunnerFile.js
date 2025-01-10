const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function processarFaturamento(faturamentoFile) {
  const faturamento = JSON.parse(fs.readFileSync(faturamentoFile, 'utf-8'));

  // Filtrar os dias com faturamento maior que 0
  const diasComFaturamento = faturamento.filter(dia => dia.valor > 0);

  // Encontrar o menor e o maior valor de faturamento
  const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
  const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

  // Calcular a média mensal de faturamento
  const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
  const mediaMensal = somaFaturamento / diasComFaturamento.length;

  // Contar os dias com faturamento acima da média mensal
  const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

  console.log("Menor valor de faturamento:", menorFaturamento.toFixed(2));
  console.log("Maior valor de faturamento:", maiorFaturamento.toFixed(2));
  console.log("Número de dias acima da média mensal:", diasAcimaDaMedia);

  // Gerar o XML
  let xmlData = '';
  faturamento.forEach((dia, index) => {
    xmlData += `<row>\n  <dia>${index + 1}</dia>\n  <valor>${dia.valor.toFixed(2)}</valor>\n</row>\n`;
  });

  fs.writeFileSync('faturamento2.xml', xmlData);
  console.log('XML gerado com sucesso: faturamento2.xml');
}

rl.question('Deseja executar o faturamento 1 ou faturamento 2? ', (resposta) => {
  if (resposta.toLowerCase() === 'faturamento 1') {
    processarFaturamento('./faturamento.json');
  } else if (resposta.toLowerCase() === 'faturamento 2') {
    processarFaturamento('./faturamento2.json');
  } else {
    console.log('Opção inválida');
    rl.close();
  }
});
