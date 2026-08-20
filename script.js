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
    maximo: Infinity,
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

function calcular() {
  const peso = Number(inputPeso.value.replace(",", "."));
  const altura = Number(inputAltura.value.replace(",", "."));

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Peso ou altura inválidos");
    return;
  }
  if (peso > 635 || altura > 2.72 || peso < 2 || altura < 0.54) {
    alert("Valores fora dos limites aceitáveis");
    return;
  }

  const imc = peso / (altura * altura);
  const faixa = dados.find(item => imc >= item.minimo && imc <= item.maximo);
  mostrarResultado(imc, faixa);
}

function mostrarResultado(imc, faixa){
  
  inputDados.classList.add("hide")
  resultados.classList.remove("hide")
  numeroImc.textContent = imc.toFixed(1)
  if (!faixa) {
    alert("IMC fora da tabela de classificação");
    return;
  }
  informacaoImc.textContent = faixa.info || faixa.classificacao
}

botaoCalculo.addEventListener("click", calcular);
voltarBotao.addEventListener("click", () => {
  inputDados.classList.remove("hide");
  resultados.classList.add("hide");
});