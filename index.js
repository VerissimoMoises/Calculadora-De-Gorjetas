function formataMoney(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2);
    return '$' + value 
};

function formatSplit(value) {
    if(value == 1) {
        return value + ' pessoa'
    } else {
        return value + ' pessoas'
    }
}

function update() {
    let valor = Number(document.getElementById('valorDaConta').value);
    let porcentagem = document.getElementById('barraPorcentagem').value;
    let divisao = document.getElementById('inputDivisao').value;
    let inputDivisao = document.getElementById('inputDivisao').value;
    
    
    let gorjeta = valor * (porcentagem / 100);
    let totalComGorjeta = valor + gorjeta;
    let valorParaCada = totalComGorjeta / divisao;

    document.getElementById('porcentagem').innerHTML = porcentagem + ' %';
    document.getElementById('gorjeta').innerHTML = formataMoney(gorjeta);
    document.getElementById('totalComGorjeta').innerHTML = formataMoney(totalComGorjeta);
    document.getElementById('splitValue').innerHTML = formatSplit(inputDivisao);
    document.getElementById('valorParaCada').innerHTML = formataMoney(valorParaCada);
}

update(); 