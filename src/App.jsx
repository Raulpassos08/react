import './App.css'

function App() {
  const catchal = {
    cliente: 'Catchal',
    idade: 20,
    compras: [
      {nome: 'Notebook', preco: 'R$ 2500'},
      {nome: 'Geladeira', preco: 'R$ 3000'},
      {nome: 'Smartphone', preco: 'R$ 1500'}
    ],
    ativa: true
  }

  const mario = {
    cliente: 'mario',
    idade: 25,
    compras: [
      {nome: 'Notebook', preco: 'R$ 2500'},
      {nome: 'Geladeira', preco: 'R$ 3000'},
      {nome: 'Smartphone', preco: 'R$ 1500'},
      {nome: 'Guitarra', preco: 'R$ 3500'}
    ],
    ativa: false
  }

  const dados = catchal;

  const total = dados.compras
  .map((item) => Number(item.preco.replace('R$ ', '')))
  .reduce((a, b) => a + b);



  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Nome: {dados.idade}</p>
      <p>Situação: 
        <span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? 'Ativa' : 'Inativa'}</span>
      </p>
      <p>Total: R$ {total}</p>
      <p>{total > 10000 && "Você está gastando muito"}</p>
    </div>
  )
}

export default App
