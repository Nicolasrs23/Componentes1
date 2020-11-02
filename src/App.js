
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home greattings="Bienvenido a mi E-commerce" />
    </div>
   
  );
}

export default App;
