import './App.css';
import './components/Navbar.css'
import './components/Title.css'
import './components/Info.css'
import Navbar from './components/Navbar';
import Title from './components/Title';
import Info from './components/Info';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Info />
    </div>
  );
}

export default App;
