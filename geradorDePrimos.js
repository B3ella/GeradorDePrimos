let buttonGerar = document.querySelector(".button-gerar");
buttonGerar.addEventListener("click", (e) => {
  e.preventDefault();
  gerarPrimos();
});
function gerarPrimos() {
  let primos = [];
  const teto = document.querySelector(".input-teto").value;
  for (let candidato = 2; candidato <= teto; candidato++) {
    let candidatoAtualEPrimo = true;
    primos.forEach((primo) => {
      if (candidato % primo == 0) {
        candidatoAtualEPrimo = false;
      }
    });
    if (candidatoAtualEPrimo) {
      primos.push(candidato);
    }
  }
  adicionaPrimoAoGrafico(primos);
}

function adicionaPrimoAoGrafico(primos) {
  let grafico = document.querySelector(".grafico");
  grafico.innerHTML = "";
  let maiorPrimo = primos[primos.length - 1];
  primos.forEach((primo) => {
    grafico.appendChild(criaMedidaNoGrafico(primo, maiorPrimo));
  });
}

function criaMedidaNoGrafico(numero, maiorPrimo) {
  let div = document.createElement("div");
  div.textContent = numero;
  div.className = "coluna";
  let tamanhoProporcional = (numero * 80) / maiorPrimo;
  div.style.height = tamanhoProporcional + "vh";
  div.style.width = 100/maiorPrimo + "vw"
  div.style.fontSize = 1000/maiorPrimo+"px";
  return div;
}
