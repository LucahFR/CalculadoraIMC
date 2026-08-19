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
  /* pegar altura e peso dos inputs
  converter para número (substituindo vírgula por ponto)
  se altura ou peso forem inválidos:
    exibir mensagem de erro
    parar (return)
  fim se
  imc = peso / (altura * altura)
  faixa = procurar no array dados qual objeto corresponde ao imc
  chamar mostrarResultado(imc, faixa)
fim função */
}
function mostrarResultado(){
  /* preencher #imcNumero com o valor do imc (formatado)
  preencher #imcInfo com a classificação (faixa.info ou faixa.classificacao)
  (opcional) gerar as linhas da tabela e destacar a linha da faixa
  esconder #inputDados (adicionar classe .hide)
  mostrar #resultado (remover classe .hide)
fim função */
}
