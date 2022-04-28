import './App.css';

function App() {

  const rand = (Math.random() * 100).toFixed(0);
  const hello = "Hello World";

  return (
    <div className="App">
      <h1>{hello} {rand}</h1>
    </div>
  );
}

export default App;
