import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Card from './components/Card'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header img='images/pokeball.png' alt='pokeball'/>
      <h1>Olá Matheus</h1>
      <SayMyName name="Matheus" />
      <SayMyName name="João" />
      <img src="https://th.bing.com/th/id/R.806f957388526ba1efb25d808aec35d6?rik=Z%2bMMoz0Otx9Y3w&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f43200000%2fSitting-Pikachu-pikachu-43222222-120-120.png&ehk=HKnsbFvQ8UIsb4Fm2kBCY9246nryzjtOxvnIYfT2snU%3d&risl=&pid=ImgRaw&r=0" alt=""/>
      <Card img="https://th.bing.com/th/id/R.806f957388526ba1efb25d808aec35d6?rik=Z%2bMMoz0Otx9Y3w&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f43200000%2fSitting-Pikachu-pikachu-43222222-120-120.png&ehk=HKnsbFvQ8UIsb4Fm2kBCY9246nryzjtOxvnIYfT2snU%3d&risl=&pid=ImgRaw&r=0" alt="Pikachu" nome="Pikachu" tipo="Eletrico" preco="2.000" qt="10" />
    
    </div>
  );
}

export default App;
