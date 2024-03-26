// console.log(typeof 5);
// console.log(typeof -5.2);
// console.log(typeof 'hello world');
// console.log(typeof [2,3,4]);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3); // potência
// console.log(4 % 2); // mod ou resto da divisão

// operações básicas com strings
// concatenação
// console.log('hello' + ' world' + ' satc' );

// interpolação
// console.log(`A soma de 2 + 2 = ${2 + 2}`);

// comparações
// console.log(5 > 2);
// console.log(5 < 2);
// console.log(5 <= 2);
// console.log(5 >= 2);
// console.log(2 == 2);
// console.log(2 === '2'); // igual idêntico ou absoluto
// console.log(3 != 3);
// console.log(3 !== '3'); // diferente absoluto
// console.log(3 > 2 && 2 > 1); && (AND)
// console.log(3 > 2 && 2 < 1);
// console.log(3 > 2 || 2 < 1); // || (OR)
// console.log(!true);
// console.log(!false);

// variáveis
var a = 2;
let b = 3;   // variáveis de bloco
const c = 4; //

if(true) {
    // console.log(a);
    // console.log(b);
    // console.log(c);
    var d = 5;
    let e = 6; // não pode ser acessada de fora deste bloco
    const f = 7; //   
}
// console.log(d);
// console.log(e); // não pode
// console.log(f); // não pode

// declaração múltipla
const g = 1, h = 2, i = 3;
// console.log(g,h,i);

// if-else
const user = 'rodrig';
if(user === 'rodrigo'){
    // console.log('Usuário autenticado!');
} else {
    // console.log('Usuário inexistente');
}

// operador ternário -> equivale ao if-else
// user === 'rodrigo' ? console.log('Usuário autenticado!') : console.log('Usuário inexistente');

const curso = 'MKT';
switch(curso) {
    case 'ENC':
        console.log('Engenharia de Computação');
        break;
    case 'ESW':
        console.log('Engenharia de Software');
        break;
    case 'EMC':
        console.log('Engenharia Mecatrônica');
        break;
    default:
        // console.log('Curso ineistente');
}

// laços de repetição

let j = 0;
while(j < 10) {
    // console.log('indice: ', j);
    j++;
}

let k = 10;
do {
    // console.log('indice: ', k);
    k++;
} while(k < 10);

for(let i = 0; i < 10; i++) {
    // console.log('indice: ', i);
}

for(let i = 0; i < 10; i++) {
    if(i === 5) {
        break;
    };
    // console.log('indice: ', i);
}

for(let i = 0; i < 10; i++) {
    if(i === 5) {
        continue;
    };
    // console.log('indice: ', i);
}

// funções
function defineParOuImpar(numero){
    if(numero % 2 === 0) {
        console.log(`${numero} é par!`);
    } else {
        console.log(`${numero} é ímpar!`);
    }
}

// defineParOuImpar(6);

function defineParOuImpar2(numero){
    numero % 2 === 0 ? console.log(`${numero} é par!`) : console.log(`${numero} é ímpar!`);
}

// defineParOuImpar2(7);

const defineParOuImpar3 = (numero) => {
    numero % 2 === 0 ? console.log(`${numero} é par!`) : console.log(`${numero} é ímpar!`);
}

// defineParOuImpar3(9);

// Arrays
const nomes = ['rodrigo', 'maria', 'joão'];
// console.log(nomes);
// console.log(nomes[0]);
// console.log(nomes.length); // propriedade
 nomes[0] = 'pedro';
//  console.log(nomes);

 // métodos
nomes.push('tairine'); // insere no final
nomes.unshift('ana'); // insere no inicio
// console.log(nomes);
// nomes.pop(); // remove do final
// nomes.shift(); // remove do início
// console.log(nomes);

const filteredNames = nomes.filter((nome) => nome.length >= 5); // retorna uma array
// console.log(filteredNames);

const foundName = nomes.find((nome) => nome.length >= 5); // retorna o primeiro que encontrar
// console.log(foundName);

const foundIndex = nomes.findIndex((nome) => nome.length >= 5); // retorna o índice do primeiro que encontrar
// console.log(nomes);
// console.log(foundIndex);

// const slicedNames = nomes.slice(2, 5); // retorna um array a partir dos índices informados
const slicedNames = nomes.slice(2);
// console.log(slicedNames);

// percorrendo array
for(let i = 0; i < nomes.length; i++) {
    // console.log(nomes[i]);
}

for(let nome of nomes) {
    // console.log(nome);
}

// nomes.forEach((nome) => console.log(nome));
// nomes.map((nome) => console.log(nome));

let numeros = [1, 2, 3];
const mappedNumbers = numeros.map((numero) => numero * 2);
// console.log(mappedNumbers);

// Objetos
// forma literal
const aluno = {
    nome: "joão",
    matricula: 123,
    email: "joão@email.com",
    infos: function (){ // função anônima
        console.log(`Nome: ${this.nome}\nMatricula: ${this.matricula}`)
    }
}

// console.log(aluno);
aluno.nome = 'pedro';
// console.log(aluno.email);
aluno.cel = '99999-9999'
// console.log(aluno);
aluno.infos();
