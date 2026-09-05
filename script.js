const produtoInput = document.getElementById("produto");
const btnCalcular = document.getElementById("btnCalcular");

const resultado = document.getElementById("resultado");

const valorFinal = document.getElementById("valorFinal");
const valorProduto = document.getElementById("valorProduto");

const taxaEreeemby = document.getElementById("taxaEreeemby");
const taxaLucro = document.getElementById("taxaLucro");
const taxaIntermediadora = document.getElementById("taxaIntermediadora");

const totalTaxas = document.getElementById("totalTaxas");


// Formata valores para Real brasileiro
function moeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}


// Função principal
function calcular() {

    const produto = parseFloat(produtoInput.value);

    // Verifica se o valor é válido
    if (isNaN(produto) || produto <= 0) {

        alert("Digite um valor válido para o produto.");

        produtoInput.focus();

        return;
    }


    /*
        TAXAS

        R$ 1,00 - Cobrança Mistic Pay
        R$ 1,00 - Saque Mistic Pay
        4%       - Ereeemby
        25%      - Lucro
        2%       - Intermediadora
    */


    // Taxas fixas
    const cobrancaMistic = 1;
    const saqueMistic = 1;


    // Taxas percentuais
    const ereemby = produto * 0.04;

    const lucro = produto * 0.25;

    const intermediadora = produto * 0.02;


    // Soma das taxas
    const taxas =
        cobrancaMistic +
        saqueMistic +
        ereemby +
        lucro +
        intermediadora;


    // Valor final
    const cobrar = produto + taxas;


    // Mostra os valores na tela
    valorFinal.textContent = moeda(cobrar);

    valorProduto.textContent = moeda(produto);

    taxaEreeemby.textContent = moeda(ereemby);

    taxaLucro.textContent = moeda(lucro);

    taxaIntermediadora.textContent = moeda(intermediadora);

    totalTaxas.textContent = moeda(taxas);


    // Mostra o resultado
    resultado.style.display = "block";
}


// Clique no botão
btnCalcular.addEventListener("click", calcular);


// Pressionar Enter no campo
produtoInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        calcular();
    }

});
