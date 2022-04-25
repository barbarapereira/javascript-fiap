import './App.css';

function App() {
  let hello = "Hello World: ";
  let rand = (Math.random() * 100).toFixed(0);

  return (
    <div className="App">
      <h1>{hello} {rand}</h1>
    </div>
  );
}

export default App;
