export default function GenericComponent( { children } ) {
    return (
        <div>
            <h3>Conteúdo recebido de outros componentes</h3>
            {children}
        </div>
    )
}