import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <h1>Olá Matheus</h1>
      <SayMyName name="Matheus" />
      <SayMyName name="João" />

      <Card nome="Pikachu" tipo="Eletrico" preco="2.000" qt="10" />
      <Card nome="Clafawry" tipo="Fada" preco="3.000" qt="6" />
    </div>
  );
}

export default App;
