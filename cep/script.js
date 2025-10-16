document.getElementById("busca").addEventListener("click",function(){
    const cep=document.getElementById("cep").value;
    if(!cep)return alert("Digite o CEP");


    const xhr= new XMLHttpRequest();
    xhr.open("GET",`https://viacep.com.br/ws/${cep}/json/`);

    xhr.onload=function(){
        if (xhr.status===200){
            const dados= JSON.parse(xhr.responseText);
            document.getElementById("resultado").innerHTML=`<h3>${dados.logradouro}</h3>
        <p>${dados.bairro} - ${dados.localidade}/${dados.uf}</p>`;

        }else {
            document.getElementById("resltado").innerHTML="<p>CEP não encontrado!</p>"
        }
    };
    xhr.send();

})