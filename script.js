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
const resultados = document.body.querySelector("#resultado")
const numeroImc = document.body.querySelector("#imcNumero span")
const informacaoImc = document.body.querySelector("#imcInfo span")
const voltarBotao = document.body.querySelector("#botaoVoltar")

// Funções

function calcular(){
  inputPeso.value = inputPeso.value.replace(",", ".")
  inputAltura.value = inputAltura.value.replace(",", ".")
  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
    alert("Peso ou altura inválidos")
    return
  } else if (peso > 635 || altura > 2.72) {
    alert("Peso ou altura fora do limite")
    return
  } else if (peso < 2 || altura < 0.54) {
    alert("Peso ou altura abaixo do limite")
    return
  }
  
  if (peso > 0 && altura > 0) {
    const imc = peso / (altura * altura)
    const faixa = dados.find((faixa) => imc >= faixa.minimo && imc <= faixa.maximo)
    mostrarResultado(imc, faixa)
  }
}
function mostrarResultado(imc, faixa){
  
  /* preencher #imcNumero com o valor do imc (formatado)
  preencher #imcInfo com a classificação (faixa.info ou faixa.classificacao)
  (opcional) gerar as linhas da tabela e destacar a linha da faixa
  esconder #inputDados (adicionar classe .hide)
  mostrar #resultado (remover classe .hide)
fim função */
}
