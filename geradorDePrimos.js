let buttonGerar = document.querySelector(".controlador__button-gerar");
buttonGerar.addEventListener("click", (e) => {
  e.preventDefault();
  gerarPrimos();
});
let controladorInput = document.querySelector(".controlador__input-teto");
controladorInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    gerarPrimos();
  }
});

function gerarPrimos() {
  let primos = [];
  const menorPrimo = 2;
  const teto = document.querySelector(".controlador__input-teto").value;
  for (let candidato = menorPrimo; candidato <= teto; candidato++) {
    let candidatoAtualEPrimo = testaSePrimo(candidato, primos);
    if (candidatoAtualEPrimo) {
      primos.push(candidato);
    }
  }
  adicionaPrimosAoGrafico(primos);
}

function testaSePrimo(candidato, primos) {
  let candidatoAtualEPrimo = true;
  primos.forEach((primo) => {
    if (candidato % primo == 0) {
      candidatoAtualEPrimo = false;
    }
  });
  return candidatoAtualEPrimo;
}

function adicionaPrimosAoGrafico(primos) {
  let grafico = document.querySelector(".grafico");
  grafico.innerHTML = "";
  primos.forEach((primo) => {
    grafico.appendChild(criaMedidaNoGrafico(primo, primos));
  });
}

function criaMedidaNoGrafico(numero, primos) {
  let div = document.createElement("div");
  div.textContent = numero;
  div.className = "coluna";
  let maiorPrimo = primos[primos.length - 1];
  div.style.height = (numero * 80) / maiorPrimo + "vh";
  div.style.width = 100 / maiorPrimo + "vw";
  div.style.fontSize = 1000 / maiorPrimo + "px";
  return div;
}
