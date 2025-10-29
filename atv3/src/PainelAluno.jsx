function PainelAluno ({nome,curso,pontos}){
    return (
        <div style={{borde:"5px solid #28b2fcd1",padding:"25px",borderRadius:"5px",width:"300px",margin:"20px"}}>
        <h2>aluno:{nome}</h2>
        <p>curso:{curso}</p>
        <p>pontuação:{pontos}</p>
        </div>
    );
}  
export default PainelAluno;