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
    maximo: 635,
    classificacao: "Acima de 40",
    info: "Obesidade grave",
    obesidade: "III",
  },
];

// Elementos

const inputPeso = document.body.querySelector("#peso")
const inputAltura = document.body.querySelector("#altura")
const botaoCalculo = document.body.querySelector("#botaoCalcular")
const inputDados = document.body.querySelector("#inputDados")
const resultados = document.body.querySelector("#resultado")
const numeroImc = document.body.querySelector("#imc span");
const informacaoImc = document.body.querySelector("#imcInfo span")
const voltarBotao = document.body.querySelector("#botaoVoltar")
const linhasTabela = document.body.querySelector("#linhasTabela");

// Funções

function calcular() {
  const peso = Number(inputPeso.value.replace(",", "."));
  const altura = Number(inputAltura.value.replace(",", "."));

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0 || peso > 635 || altura > 2.72) {
    alert("Peso ou altura inválidos");
    return;
  }

  const imc = peso / (altura * altura);
  const faixa = dados.find(item => imc >= item.minimo && imc <= item.maximo);
  mostrarResultado(imc, faixa);
}

function mostrarResultado(imc, faixa) {
  if (!faixa) {
    alert("IMC fora da tabela de classificação");
    return;
  }

  numeroImc.textContent = imc.toFixed(1);
  informacaoImc.textContent = faixa.info || faixa.classificacao;
  let html = "";
  for (let i = 0; i < dados.length; i++) {
    const item = dados[i];
    const destaque = item === faixa ? 'id="destaque"' : "";
    html += `<div class="tabelaLinha" ${destaque}>
              <span>${item.info}</span>
              <span>${item.classificacao}</span>
              <span>${item.obesidade}</span>
            </div>`;
  }
  linhasTabela.innerHTML = html;

  inputDados.classList.add("hide");
  resultados.classList.remove("hide");
}

// botão de cálculo e botão de voltar + DOMContentLoaded

window.addEventListener("DOMContentLoaded", () => {
  botaoCalculo.addEventListener("click", calcular);
  voltarBotao.addEventListener("click", () => {
    inputDados.classList.remove("hide");
    resultados.classList.add("hide");
  });
});
