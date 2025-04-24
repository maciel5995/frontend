
import './App.css'
import ConditionalComponent1 from './components/ConditionalComponent1';
import ConditionalComponent2 from './components/ConditionalComponent2';
import ProductComponent from './components/ProductComponent';
import PostComponent from './components/PostComponent';
import GenericComponent from './components/GenericComponent';
import MyButtomComponent from './components/MyButtonComponent';
import UseStateComponent from './components/UseStateComponent';

function App() {
  let component;
  let condition = true;

  if(condition){
    component = <ConditionalComponent1/>    
  } else {
    component = <ConditionalComponent2/>   
  }

  const products = [
    {id: 1, name: 'Laranja'},
    {id: 2, name: 'Uva'},
    {id: 3, name: 'Maça'}
  ];
  //PRIMEIRA FORMA
  const listItems = products.map(product => 
    <li key={product.id}>{product.name}</li>
    )

  const listPosts = [
    {id: 1, title: 'Post 1', description: 'Description 1'},
    {id: 2, title: 'Post 2', description: 'Description 2'},
    {id: 3, title: 'Post 3', description: 'Description 3'},
    {id: 4, title: 'Post 4', description: 'Description 4'},
    {id: 5, title: 'Post 5', description: 'Description 5'}
  ]
  

  return (
    <>
    {component}
     
     <div>      
      {condition ? <ConditionalComponent1/> : <ConditionalComponent2/>}
     </div>

     <ul>{listItems}</ul>

     {/** SEGUNDA FORMA */}
     <ul>
      {products.map((prod) => (
        <li key={prod.id}>{prod.name}</li>
      ))}
     </ul>

     <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        {products.map((prod) => (
          <tr key={prod.id}>
            <td>{prod.id}</td>
            <td>{prod.name}</td>
          </tr>
        ))}
      </tbody>
     </table>

     <ProductComponent name='Arroz' category='Alimento'/>
     <ProductComponent name='Martelo' category='Ferramenta'/>

     <div>
      {listPosts.map((post) => (
        <PostComponent key={post.id} title={post.title} description={post.description}/>
      ))}
     </div>

     <div>
     <GenericComponent>
        <p>Eu sou o primeiro conteúdo fornecido pelo componente pai</p>
        <hr />
     </GenericComponent>
     <GenericComponent>
        <p>Eu sou o segundo conteúdo fornecido pelo componente pai</p>
        <ul>
          <li>Item 01</li>
          <li>Item 02</li>
        </ul>
        <hr />
     </GenericComponent>
     </div>

     <div>
      <MyButtomComponent/>
     </div>

     <div>
      <UseStateComponent/>
     </div>

     

    
    </>
  )
}

export default App
