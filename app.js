
const btn = document.querySelector("#btn");

function calcularImc() {
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    let result = document.querySelector("#result");
    let imc = (peso / (Math.pow(altura, 2.0))).toFixed(2);
    result.innerHTML = `O imc é ${imc}`;
}

btn.addEventListener("click", calcularImc);