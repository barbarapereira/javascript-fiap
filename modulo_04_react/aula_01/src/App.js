import './App.css';

function App() {
  const rand = Math.random()*100.;
  const conteudo = 'número_' + rand.toFixed(0);
  return (
    <div className="App">
        <p>Hello World: </p>
        <span className="rand">{conteudo}</span>
    </div>
  );
}

export default App;
