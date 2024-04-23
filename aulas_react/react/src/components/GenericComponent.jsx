
import classes from './GenericComponent.module.css'

export default function GenericComponent( { children } ) {
    return (
        <div>
            <p className={classes.title}>Conteúdo recebido de outros componentes</p>
            {children}
        </div>
    )
}