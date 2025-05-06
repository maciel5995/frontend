import { useState } from 'react'

import './App.css'
import ProductTable from './components/ProductTable'
import ProductForm from './components/ProductForm'

function App() {



   // CRUD EM MEMÓRIA

   const [products, setProducts] = useState([])
   const [id, setId] = useState(1)
   const [name, setName] = useState("")
   const [price, setPrice] = useState("")
   const [stock, setStock] = useState("")
   const [edit, setEdit] = useState(false)
 
   const clearForm = () => {
     setName("")
     setPrice("")
     setStock("")
   }
 
   const saveProduct = (e) => {
     e.preventDefault();
     if(!edit) {
       setId(v => v + 1);
       setProducts((prevProducts) => [...prevProducts, { id, name, price, stock }])
     } 
     
     if(edit) { 
       const productIndex = products.findIndex(prod => prod.id === id)
       products[productIndex] = { id, name, price, stock } 
       setProducts(products)
       setEdit(false)      
     }   
     clearForm()
   }
 
   const deleteProduct = (id) => {
     setProducts(products.filter((prod) => prod.id !== id))
   }
 
   const editProduct = (id) => {
     const product = products.find(prod => prod.id === id)
     setId(product.id)
     setName(product.name)
     setPrice(product.price)
     setStock(product.stock)
     setEdit(true)
   }
 
   const handleName = (e) => {setName(e.target.value)}
   const handlePrice = (e) => {setPrice(e.target.value)}
   const handleStock = (e) => {setStock(e.target.value)}
 
   return (
     <>
        <ProductForm name={name} price={price} stock={stock} handleName={handleName}
        handlePrice={handlePrice} handleStock={handleStock} saveProduct={saveProduct}/>

       <div>
         {
           products.length > 0 ? <ProductTable products={products} deleteProduct={deleteProduct} editProduct={editProduct} /> :
           <h3 style={{marginBottom: '30px'}}>Nenhum produto cadastrado...</h3>
         }
       </div>
 

  
     </>
   )
}

export default App
