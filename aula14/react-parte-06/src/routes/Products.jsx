import { Link } from "react-router-dom"

export default function Products(){
    
  const products = [
    {id: 1, name: 'Laranja', price: 9},
    {id: 2, name: 'Banana', price: 8},
    {id: 3, name: 'Melancia', price: 14}
  ]


    return(
        <div>
            {products.map((prod) => (
                <ul key={prod.id} style={{listStyle: 'none'}}>
                    <li>Nome: {prod.name}</li>
                    <li>Preço: R$ {prod.price}</li>
                    <li><Link to={`/products/${prod.id}/info`}>Mais informações</Link></li>
                </ul>
            ))}
        </div>
    )
}