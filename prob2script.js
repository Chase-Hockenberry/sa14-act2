document.getElementById("currencyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let sourceCurrency = document.getElementById("sourceCurrency").value;
    let targetCurrency = document.getElementById("targetCurrency").value;
    let amount = document.getElementById("amount").value;

    convertCurrency(sourceCurrency, targetCurrency, amount);
});

function convertCurrency(sourceCurrency, targetCurrency, amount) {
    const apiKey = 'bd78fb29536b4d67ad797bb8';
    const apiUrl = `https://api.exchangeratesapi.io/latest?base=${sourceCurrency}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let exchangeRate = data.rates[targetCurrency];
            let convertedAmount = amount * exchangeRate;
            displayResult(convertedAmount, targetCurrency, exchangeRate);
        })
}

function displayResult(convertedAmount, targetCurrency, exchangeRate) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>Converted Amount: ${convertedAmount.toFixed(2)} ${targetCurrency}</p>
        <p>Exchange Rate: 1 ${targetCurrency} = ${exchangeRate.toFixed(4)} ${document.getElementById("sourceCurrency").value}</p>
    `;
}
