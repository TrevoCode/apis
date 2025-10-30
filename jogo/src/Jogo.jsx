import React,{useState} from "react";

function Jogo(){
    const [Jogado1,setJogado1]=useState(0);
    const [Jogado2,setJogado2]=useState(0);

    const PontoJ1 = ()=> setJogado1(Jogado1 +1);
    const PontoJ2 = ()=> setJogado1(Jogado2 +2);

    return (
       <div style={{textAlign:"center",marginTop:"50px"}}>
        <h2>painel de pontos</h2>
        <p>Jogado 1{PontoJ1}</p>
        <button onClick={PontoJ1}>+ 1 Jogado 1</button>
      
               <p>Jogado 2{PontoJ2}</p>
        <button onClick={PontoJ2}>+ 1 Jogado 2</button>



       </div>
  
    )

}

export default Jogo;