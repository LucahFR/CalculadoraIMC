// Dados gerais do IMC
const dados = [
  {
    minimo: 0,
    maximo: 18.5,
    classificacao: "Menor que 18,5",
    info: "Magro",
    obesidade: "-",
  },
  {
    minimo: 18.5,
    maximo: 24.9,
    classificacao: "Entre 18,5 e 24.9",
    info: "Normal",
    obesidade: "-",
  },
  {
    minimo: 25,
    maximo: 29.9,
    classificacao: "Entre 25 e 29.9",
    info: "Sobrepeso",
    obesidade: "I",
  },
  {
    minimo: 30,
    maximo: 39.9,
    classificacao: "Entre 30 e 39.9",
    info: "Obesidade",
    obesidade: "II",
  },
  {
    minimo: 40,
    maximo: 99,
    classificacao: "Acima de 40",
    info: "Obesidade grave",
    obesidade: "III",
  },
];

// Elementos

const imcTabela = document.body.querySelector("#tabelaImc")
const inputPeso = document.body.querySelector("#peso")
const inputAltura = document.body.querySelector("#altura")
const botaoCalculo = document.body.querySelector("#botaoCalcular")
const dadosInput = document.body.querySelector("#inputDados")
const resultado = document.body.querySelector("#resultados")
const numeroImc = document.body.querySelector("#imcNumero span")
const informacaoImc = document.body.querySelector("#imcInfo span")
const voltarBotao = document.body.querySelector("#botaoVoltar")

// Funções
