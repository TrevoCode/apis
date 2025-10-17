const btc = document.getElementById("btc");

const eth = document.getElementById("eth");

const doge = document.getElementById("doge");

const erro = document.getElementById("erro");

const btn = document.getElementById("btn");


btn.addEventListener("click", function () {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd")
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {
            btc.innerHTML = "$" + dados.bitcoin.usd;
            eth.innerHTML = "$" + dados.ethereum.usd;
            doge.innerHTML = "$" + dados.dogecoin.usd;
            erro.innerHTML = "";
        })

        .catch(function () {
            erro.innerHTML = "Erro ao buscar dados .tente novamente";
        });

});