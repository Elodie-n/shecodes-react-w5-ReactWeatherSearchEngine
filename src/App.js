import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer className="text-muted">
          This project was coded by{" "}
          <span className="myName">Elodie Nerjat</span> and is{" "}
          <a
            href="https://github.com/Elodie-n/shecodes-react-w5-ReactWeatherSearchEngine"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://vibrant-clarke-4d6453.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
