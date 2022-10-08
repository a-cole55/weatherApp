import City from "./components/City";

import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Texas Major Cities Weather App</h1>
      </header>
      <div className="cityInfo">
          <City />
          <City />
          <City />
      </div>
    </div>
  );
}

export default App;
