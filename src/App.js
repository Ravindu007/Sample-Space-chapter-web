import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Events from './Events';

function App() {

  return (
    <div className="App">
      <Navbar/>
      {/* home */}
      <Home/>
      {/* About */}
      <About/>
      {/* Events */}
      <Events/>
      {/* Winners */}
      {/* contact */}
    </div>
  );
}

export default App;
