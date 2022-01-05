import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {
  const name = "Matheus"

  return (
    <div className="App">
      <h1>Olá {name}</h1>
      <HelloWorld />

      <p>Tudo que eu escrevo aqui se torna realidade</p>
      <h4>Vou conseguir trabalhar na OSF esse ano, vou passar essa seleção</h4>
    </div>
  );
}

export default App;
