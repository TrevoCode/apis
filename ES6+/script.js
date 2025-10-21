// let e const - Variáveis e Constantes
const letConstBtn = document.getElementById('letConstBtn');
const letConstOutput = document.getElementById('letConstOutput');

letConstBtn.addEventListener('click', () => {
    let output = '';
    if (true) {
        var x = 10; // Escopo de função
        let y = 20; // Escopo de bloco
        const z = 30; // Escopo de bloco
        output += `Dentro do bloco: x=${x}, y=${y}, z=${z}\n`;
    }
    output += `Fora do bloco: x=${x}\n`;
    output += 'Fora do bloco: y e z não são acessíveis (comentado no código)\n';
    letConstOutput.textContent = output;
});

// Arrow Functions
const arrowBtn = document.getElementById('arrowBtn');
const arrowOutput = document.getElementById('arrowOutput');

arrowBtn.addEventListener('click', () => {
    const somar = (a, b) => a + b;
    const dobrar = numero => numero * 2;

    let output = '';
    output += `somar(2,3) = ${somar(2,3)}\n`;
    output += `dobrar(5) = ${dobrar(5)}\n`;

    class Contador {
        constructor() { this.segundos = 0; }
        iniciar() {
            const incrementar = () => { this.segundos++; };
            incrementar();
            incrementar();
            return this.segundos;
        }
    }
    const c = new Contador();
    output += `Contador após 2 incrementos: ${c.iniciar()}\n`;
    arrowOutput.textContent = output;
});

// Template Literals
const templateBtn = document.getElementById('templateBtn');
const templateOutput = document.getElementById('templateOutput');

templateBtn.addEventListener('click', () => {
    const nome = "Maria";
    const idade = 28;
    const saudacao = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
    const html = `
<div>
    <h1>Título</h1>
    <p>Parágrafo</p>
</div>
`;
    templateOutput.textContent = saudacao + '\n\n' + html;
});

// Destructuring
const destructBtn = document.getElementById('destructBtn');
const destructOutput = document.getElementById('destructOutput');

destructBtn.addEventListener('click', () => {
    const pessoa = { nome: "Carlos", idade: 42, cidade: "Rio de Janeiro" };
    const { nome, idade } = pessoa;
    const coordenadas = [10, 20, 30];
    const [x,,z] = coordenadas;

    destructOutput.textContent = `Objeto: nome=${nome}, idade=${idade}\nArray: x=${x}, z=${z}`;
});

// Default Parameters
const defaultParamBtn = document.getElementById('defaultParamBtn');
const defaultParamOutput = document.getElementById('defaultParamOutput');

defaultParamBtn.addEventListener('click', () => {
    function saudar(nome="Visitante") {
        return `Olá, ${nome}!`;
    }
    defaultParamOutput.textContent = saudar("Ana") + '\n' + saudar();
});

// Spread e Rest
const spreadRestBtn = document.getElementById('spreadRestBtn');
const spreadRestOutput = document.getElementById('spreadRestOutput');

spreadRestBtn.addEventListener('click', () => {
    const arr1 = [1,2,3], arr2=[4,5,6];
    const arrCombinado = [...arr1,...arr2];

    function somarTudo(...nums) { return nums.reduce((acc,n)=>acc+n,0); }

    spreadRestOutput.textContent = `Arrays combinados: ${arrCombinado}\nSoma: ${somarTudo(1,2,3,4)}`;
});

// Classes
const classesBtn = document.getElementById('classesBtn');
const classesOutput = document.getElementById('classesOutput');

classesBtn.addEventListener('click', () => {
    class Animal {
        constructor(nome) { this.nome = nome; }
        falar() { return `${this.nome} faz um barulho.`; }
    }
    class Cachorro extends Animal {
        constructor(nome,raca) { super(nome); this.raca=raca; }
        falar() { return `${this.nome} late.`; }
    }
    const rex = new Cachorro("Rex","Labrador");
    classesOutput.textContent = rex.falar();
});