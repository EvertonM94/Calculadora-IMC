var btnCalcular = document.querySelector('#btn-calcular');

btnCalcular.addEventListener('click', function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    var peso = document.querySelector('#peso');
    var altura = document.querySelector('#altura');
    var res = document.querySelector('.res');

    var pesoValue = peso.value;
    var alturaValue = altura.value;

    // Validação de campos vazios ou zerados
    if (pesoValue == 0 || alturaValue == 0) {
        btnCalcular.value = "Erro";
        res.innerHTML = "Erro: preencha os campos corretamente!";
        return; // Sai da função
    }

    // Cálculo do IMC
    var imc = pesoValue / Math.pow(alturaValue, 2);
    var imcFixed = imc.toFixed(2);

    var classificacaoTexto = "";

    // Condicionais para definir a classificação
    if (imcFixed < 17) {
        classificacaoTexto = "Muito abaixo do peso";
    } else if (imcFixed >= 17 && imcFixed <= 18.49) {
        classificacaoTexto = "Abaixo do peso";
    } else if (imcFixed >= 18.5 && imcFixed <= 24.99) {
        classificacaoTexto = "Peso normal";
    } else if (imcFixed >= 25 && imcFixed <= 29.99) {
        classificacaoTexto = "Acima do peso";
    } else if (imcFixed >= 30 && imcFixed <= 34.99) {
        classificacaoTexto = "Obesidade I";
    } else if (imcFixed >= 35 && imcFixed <= 39.99) {
        classificacaoTexto = "Obesidade II";
    } else {
        classificacaoTexto = "Obesidade III";
    }

    // Injeta a estrutura de resultado no HTML
    res.innerHTML = `
        <div class="status-container">
            <div class="status-row">
                <p>Peso</p>
                <p>Altura</p>
                <p>IMC</p>
                <p>Resultado</p>
            </div>
            <div class="status-row">
                <p>${pesoValue}kg</p>
                <p>${alturaValue}m</p>
                <p>${imcFixed}</p>
                <p>${classificacaoTexto}</p>
            </div>
        </div>
    `;

    // Reseta os campos de input e altera o botão
    peso.value = "";
    altura.value = "";
    btnCalcular.value = "Refazer";
});