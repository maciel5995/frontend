import { useEffect, useState } from 'react'

import './App.css'
import ProductTable from './components/ProductTable'
import ProductForm from './components/ProductForm'

function App() {
   // CRUD COM PERSISTÊNCIA NO JSON-SERVER

   const [products, setProducts] = useState([])
   const [id, setId] = useState("")
   const [name, setName] = useState("")
   const [price, setPrice] = useState("")
   const [stock, setStock] = useState("")
   const [edit, setEdit] = useState(false)

   const url = 'http://localhost:3000/products'

   useEffect(() => {
    // Listar todos os produtos:
    const getProductList = async() => {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }

    getProductList()

   },[])
   
   const clearForm = () => {
     setName("")
     setPrice("")
     setStock("")
   }

   // Busca apenas um producto pelo seu ID:
   const getProductById = async(id) => {
    // Faz a requisição http:
    const res = await fetch(url + `/${id}`);
    const data = await res.json();
    // Carrega os dados no formulário para edição:
    setName(data.name);
    setPrice(data.price);
    setStock(data.stock);
    setId(data.id);

    // Habilita a edição
    setEdit(true);
   }
 
   const saveProduct = async(e) => {
     e.preventDefault();
     const saveRequestParams = {
      method: edit ? "PUT" : "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ name, price, stock })
     }

     // Cria url para buscar todos ou apenas um produto:
     const save_url = edit ? url + `/${id}` : url;    
     // Faz a requisição http:
     const res = await fetch(save_url, saveRequestParams);
     // Se for cadastro de novo produto:
     if(!edit) {
       const newProduct = await res.json();
       // Atualização da tabela:
       setProducts((prevProducts) => [...prevProducts, newProduct]);
     } 
     
     if(edit) { 
       const editedProduct = await res.json();
       // Atualização da tabela:
       const editedProductIndex = products.findIndex(prod => prod.id === id);
       products[editedProductIndex] = editedProduct;
       setProducts(products);          
     }   
     clearForm();
     setEdit(false);   
   }
 
   const deleteProduct = async(id) => {
     // Faz a requisição http:
     const res = await fetch(url + `/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json"
        }
     });
     const deleteProduct =  await res.json();
     // Atualização da tabela:
     setProducts(products.filter(prod => prod.id !== deleteProduct.id));
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
           products.length > 0 ? <ProductTable products={products} deleteProduct={deleteProduct} editProduct={getProductById} /> :
           <h3 style={{marginBottom: '30px'}}>Nenhum produto cadastrado...</h3>
         }
       </div>  
     </>
   )
}

export default App
