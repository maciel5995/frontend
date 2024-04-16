export default function ProductComponent(props) {
// export default function ProductComponent({name, category}) {
    return (
        <div>
            <p>Produto: {props.name} - Categoria: {props.category}</p>
            {/* <p>Produto: {name} - Categoria: {category}</p> */}
        </div>
    )
}