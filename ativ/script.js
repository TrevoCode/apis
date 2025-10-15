async function gerarDog() {
    await fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json())
        .then(data => {
            console.log(data);
            const img = document.getElementById("doImg");
            img.src = data.message;

        })
        .catch(error => {
            console.error("Erro ao buscat cachorro:", error);
            alert("ocorreu um erro ao carregar o cachorro");
        });
}