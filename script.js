// Taxas fixas (em reais)
const TAXA_COBRANCA = 1;
const TAXA_SAQUE = 1;

// Taxas percentuais (sobre o valor final cobrado)
const PCT_EREEMBY = 0.04;
const PCT_LUCRO = 0.25;
const PCT_INTERMEDIADORA = 0.02;

const PCT_TOTAL = PCT_EREEMBY + PCT_LUCRO + PCT_INTERMEDIADORA; // 0.31
const FIXO_TOTAL = TAXA_COBRANCA + TAXA_SAQUE; // 2

function formatar(v) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function calcular() {
  const input = document.getElementById('valorProduto');
  const erro = document.getElementById('erro');
  const resultado = document.getElementById('resultado');

  const valorProduto = parseFloat(input.value);

  if (isNaN(valorProduto) || valorProduto <= 0) {
    erro.style.display = 'block';
    resultado.classList.remove('show');
    return;
  }
  erro.style.display = 'none';

  // As porcentagens incidem sobre o VALOR FINAL (V), não sobre o produto.
  // V - fixo - (pct_total * V) = valorProduto
  // V * (1 - pct_total) = valorProduto + fixo
  // V = (valorProduto + fixo) / (1 - pct_total)
  const valorFinal = (valorProduto + FIXO_TOTAL) / (1 - PCT_TOTAL);

  const valorEreemby = valorFinal * PCT_EREEMBY;
  const valorLucro = valorFinal * PCT_LUCRO;
  const valorInterm = valorFinal * PCT_INTERMEDIADORA;

  document.getElementById('valorFinal').textContent = formatar(valorFinal);
  document.getElementById('lCusto').textContent = formatar(valorProduto);
  document.getElementById('lCobranca').textContent = formatar(TAXA_COBRANCA);
  document.getElementById('lSaque').textContent = formatar(TAXA_SAQUE);
  document.getElementById('lEreemby').textContent = formatar(valorEreemby);
  document.getElementById('lLucro').textContent = formatar(valorLucro);
  document.getElementById('lInterm').textContent = formatar(valorInterm);
  document.getElementById('lTotal').textContent = formatar(valorFinal);

  resultado.classList.add('show');
}

document.getElementById('valorProduto').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') calcular();
});
