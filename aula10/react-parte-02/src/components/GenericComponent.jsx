import classes from './GenericComponent.module.css'

function GenericComponent({children}) {
    return (
        <div>
            <h3 className={classes.title}>HTML passado pelo componente pai</h3>
            {children}
        </div>
    )
}

export default GenericComponent