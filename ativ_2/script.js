async function gerarConselho(){
    await fetch("https://api.adviceslip.com/advice").the (response=> response.json()).then(data=>{
        console.log(data);
    }
}