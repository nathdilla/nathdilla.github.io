import './App.css';
import Nav from './components/Nav/Nav';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <Intro />
        <About />
        <Experience />
      </header>
    </div>
  );
}

export default App;
