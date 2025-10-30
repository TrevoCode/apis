import React,{useState} from "react";

function S (){

  const [mostrar,setmostrar]=useState(false);

  function alternarMensangem(){
    setmostrar(!mostrar);
 }
   return (

    <div >
        <h2>mensagem Secreta</h2>
        <button onClick={{alternarMensangem}}>{mostrar ?"esconder mensagem":"Mostrar mensagem"}</button>

        {mostrar && <p>gdg</p>}
        
    </div>
   );
}


export default S;