import React,{useState} from "react";


function ContadorCliques(){


const [Contador,setContador]=useState(0);

const aumentarContador =()=>{
    setContador(Contador+1)
};

return (
  <div style={{textAlign:"center",marginTop:"50px"}}>
    <h2>contado de clique </h2>
  <p> clicou {Contador}</p>
<button onClick={aumentarContador}>clique aqui</button>

</div>

);

}

export default ContadorCliques;