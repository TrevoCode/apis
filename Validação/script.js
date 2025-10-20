const nome = document.getElementById("nome");
const mensagemErro = document.getElementById("mensagemErro");
const btnEnviar = document.getElementById("btnEnviar");


btnEnviar.addEventListener("click", function () {
    if (!nome.value.trim()) {
        mensagemErro.textContent = "O campo e obrigatorio";

    } else {
        mensagemErro.textContent = "";
        alert("nome enviado com sucesso");
    }
});