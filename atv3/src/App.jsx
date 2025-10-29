import React, { useState } from "react";
import PainelAluno from "./PainelAluno";


function App (){

const [pontos,setpontos]= useState(0);
const [nome]=useState("trevo");
const [curso]=useState("Ciber");


const aumentarPontos = ()=>{

  setpontos ((prev)=>prev +1);


};

return (
   <div style={{textAlign:"center",marginTop:"50px"}}>
    <h1>Sitema de pontuação</h1>
   <PainelAluno nome={nome} curso={curso} pontos={pontos}/>
    <button onClick={aumentarPontos}>adiciona</button>
  </div>
);

}
export default App;
