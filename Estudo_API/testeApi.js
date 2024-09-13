function converter() {
    const valorReais = document.getElementById('valorReais').value;

    if (valorReais == 0) {
        document.getElementById('resultado').innerText = "Por favor, insira um valor válido.";
        return;
    }

    // Data de cotação no formato MM-DD-YYYY
    const dataCotacao = '09-13-2024'; 

    const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?%40dataCotacao=13%2F09%2F2024&%24format=text%2Fhtml&%24top=1`;

    
        
        
            // Acessa o valor da cotação de compra
            const cotacaoDolar = data.value[0].cotacaoCompra;

            // Calcula o valor em dólares
            const valorDolares = (valorReais / cotacaoDolar).toFixed(2);

            // Mostra o resultado
            document.getElementById('resultado').innerText = `O valor de R$ ${valorReais} equivale a $ ${valorDolares} dólares.`;
        
        
}
