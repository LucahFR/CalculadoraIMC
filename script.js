// Dados gerais do IMC
const dados = [
  { minimo: 0, maximo: 18.5, classificacao: "Menor que 18,5", info: "Magro", obesidade: "-" },
  { minimo: 18.5, maximo: 25, classificacao: "Entre 18,5 e 24.9", info: "Normal", obesidade: "-" },
  { minimo: 25, maximo: 30, classificacao: "Entre 25 e 29.9", info: "Sobrepeso", obesidade: "I" },
  { minimo: 30, maximo: 40, classificacao: "Entre 30 e 39.9", info: "Obesidade", obesidade: "II" },
  { minimo: 40, maximo: 99, classificacao: "Acima de 40", info: "Obesidade grave", obesidade: "III" }
];

// Elementos

const formulario = document.getElementById("formularioImc");
const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const inputDados = document.getElementById("inputDados");
const resultado = document.getElementById("resultado");
const numeroImcSpan = document.querySelector("#imcNumero span");
const infoImcSpan = document.querySelector("#imcInfo span");
const tabelaImc = document.getElementById("tabelaImc");
const botaoVoltar = document.getElementById("botaoVoltar");
const botaoCalcular = document.getElementById("botaoCalcular");

// Funções

function calcular(){
  inputAltura.value
  inputPeso.value
  /* 
  pegar altura e peso dos inputs
  converter para número (substituindo vírgula por ponto)
  se altura ou peso forem inválidos:
    exibir mensagem de erro
    parar (return)
  fim se
  imc = peso / (altura * altura)
  faixa = procurar no array dados qual objeto corresponde ao imc
  chamar mostrarResultado(imc, faixa)
  fim função 
*/
}

function mostrarResultado(imc, faixa){
  /* 
  preencher #imcNumero com o valor do imc (formatado)
  preencher #imcInfo com a classificação (faixa.info ou faixa.classificacao)
  (opcional) gerar as linhas da tabela e destacar a linha da faixa
  esconder #inputDados (adicionar classe .hide)
  mostrar #resultado (remover classe .hide)
  fim função 
*/
}