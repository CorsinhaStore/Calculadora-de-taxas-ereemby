function formatarBRL(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function calcular() {
  const inputEl = document.getElementById('valorProduto');
  if (!inputEl) return;

  const input = inputEl.value.replace(',', '.');
  const valorProduto = parseFloat(input);

  if (isNaN(valorProduto) || valorProduto <= 0) {
    alert('Digite um valor válido para o produto.');
    return;
  }

  const taxaFixa = 2;
  const pctEreemby = 0.04;
  const pctLucro = 0.25;
  const pctIntermediadora = 0.02;
  const pctTotal = pctEreemby + pctLucro + pctIntermediadora;

  const valorCobrar = (valorProduto + taxaFixa) / (1 - pctTotal);
  const ereemby = valorCobrar * pctEreemby;
  const lucro = valorCobrar * pctLucro;
  const intermediadora = valorCobrar * pctIntermediadora;

  document.getElementById('valorCobrar').textContent = formatarBRL(valorCobrar);
  document.getElementById('dValorProduto').textContent = formatarBRL(valorProduto);
  document.getElementById('dEreemby').textContent = formatarBRL(ereemby);
  document.getElementById('dIntermediadora').textContent = formatarBRL(intermediadora);
  document.getElementById('dLucro').textContent = formatarBRL(lucro);

  document.getElementById('resultado').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
  const inputEl = document.getElementById('valorProduto');
  if (inputEl) {
    inputEl.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') calcular();
    });
  }
});
