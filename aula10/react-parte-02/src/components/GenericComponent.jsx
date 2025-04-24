function GenericComponent({children}) {
    return (
        <div>
            <h3>HTML passado pelo componente pai</h3>
            {children}
        </div>
    )
}

export default GenericComponent