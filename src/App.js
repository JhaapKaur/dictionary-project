import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <img src={logo} className="App-logo" alt="App-logo img-fluid" />
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <a href="https://github.com/JhaapKaur/dictionary-project">
            Coded by Jhaap Kaur
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
