
import './App.css'
import EventComponent from './components/EventComponent'
import IntroComponent from './components/IntroComponent'
import ConditionalComponent1 from './components/ConditionalComponent1'
import ConditionalComponent2 from './components/ConditionalComponent2'
import ProductComponent from './components/ProductComponent'
import PostComponent from './components/PostComponent'
import GenericComponent from './components/GenericComponent'
import MyButtonComponent from './components/MyButtonComponent'
import ProductTable from './components/ProductTable'

function App() {
  let component;
  const condition = true;
  if(condition) {
    component = <ConditionalComponent1 />
  } else {
    component = <ConditionalComponent2 />
  }

  const products = [
    {id: 1, name: 'Laranja'},
    {id: 2, name: 'Uva'},
    {id: 3, name: 'Maçã'}
  ]
  const listItens = products.map(product => 
    <li key={product.id}>{product.name}</li>
  )

  const posts = [
    {id: 1, title: 'Post 1', description: 'Descrição do Post 1'},
    {id: 2, title: 'Post 2', description: 'Descrição do Post 2'},
    {id: 3, title: 'Post 3', description: 'Descrição' }
  ]

  const productsList = [
    {id: 1, name: 'Maçã', price: 10.0, stock: 20.5 },
    {id: 2, name: 'Banana', price: 8.0, stock:40.7 },
    {id: 3, name: 'Melancia', price: 7.0, stock: 100.0 },
    {id: 4, name: 'Melão', price: 9.0, stock: 30 },
    {id: 5, name: 'Uva', price: 11.0, stock: 50 }
  ]


  return (
    <>
      <h2>Componente principal</h2>

      <IntroComponent />

      <EventComponent />

      {component}

      {condition ? <ConditionalComponent1 /> : <ConditionalComponent2 />}

      <ul>{listItens}</ul>

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
      <ProductComponent name="Arroz" category="Alimento" />
      <ProductComponent name="Martelo" category="Ferramenta" />

      <div>
        {/* {posts.map((post, index) => ( */}
        {posts.map((post, index) => (
          // <PostComponent key={index} title={post.title} description={post.description}/>
          <PostComponent key={post.id} title={post.title} description={post.description}/>
        ))}
      </div>

      <GenericComponent>
        <p>Eu sou o conteúdo passado pela primeira chamada</p>
        <ol>
          <li>Item a</li>
          <li>Item b</li>
          <li>Item c</li>
        </ol>
      </GenericComponent>
      <GenericComponent>
        <p style={false ? {color: 'green'} : {color: 'black'} }>Eu sou o conteúdo passado pela segunda chamada</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </GenericComponent>
      <hr />
      <MyButtonComponent />

      <div>
      <ProductTable products={productsList} />
      </div>
    </>
  )
}

export default App
