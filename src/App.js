
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import ItemCounter from './components/Counter/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home greattings="Bienvenido a mi E-commerce" />
   <ItemCounter maxValue={8} minValue={0} initialValue={0}/>
   
    </div>
   
  );
}

export default App;
