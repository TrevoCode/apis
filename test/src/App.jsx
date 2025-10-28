
import Saudacao from "./Saudacao";

const curso = "Front End ";
const turma= "REACT - aula 1 "

function App (){
  return(
    <div>
    
    <h1>Meu primeiro REACT </h1>
    <h1>Bem-vindos ao curso de {curso}</h1>
    
    <p>Turma:{turma}</p>
    <Saudacao nome="Senai"/>
    
    </div>
  );
}

export default App;