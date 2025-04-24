// function ProductComponent(props){
function ProductComponent({name, category}){
    return (
        <div>
            {/* <p>Produto: {props.name} - Descrição: {props.category}</p> */}
            <p>Produto: {name} - Descrição: {category}</p>
        </div>
    )
}

export default ProductComponent