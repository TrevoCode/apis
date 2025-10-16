async function mostrarGato() {
    await fetch ("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data=>{
        console.log(data);
        const imagem =data[0].url;
        document.getElementById("catImg").src=imagem;
        
    })
    .catch(erro=>{
        console.erro("Erro ao carregar gato",erro);
        alertr("nao foi possivel carregar o gato agora");
    });
}