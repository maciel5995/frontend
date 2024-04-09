
// export default () => {

import ChildComponent from "./ChildComponent";

// export default function IntroComponent() {
function IntroComponent() {
    const a = 2, b = 3, nome = 'Rodrigo';
    const aluno = {
        nome: 'João',
        email: 'joão@email.com'
    }

    return (
        <>
            <p>Componente de introdução</p>
            <h3>JSX Expressions</h3>
            <p>{nome} o produto entre {a} e {b} é {a * b}</p>
            <p>Aluno: {aluno.nome} E-mail: {aluno.email}</p>
            <ChildComponent />
       
        </>
    )
}
export default IntroComponent