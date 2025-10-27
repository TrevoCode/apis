class ContadorControlle{
    constructor(model,view){
        this.model= model ;
        this.view=view;

        this.view.atualizar(this.model.getValor());
        this.view.incrementar(()=>this.incrementar());
        this.view.decrementar(()=>this.decrementar());
    }


    incrementar(){
        this.model.decrementar();

    }

    decrementar(){
        this.model.decrementar();

        this.view.atualizar(this.model.getValor());
    }
}