import logo from './logo.svg';
import './App.css';
import Login from './Compent/Login/login'
import Register from './Compent/Register/Register'
import {BrowserRouter ,Route} from 'react-router-dom'
import Home from './Compent/Home/Home'
import Catgory from './Compent/Catgory/Catgory'

import "aos/dist/aos.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/login" render={()=><Login/>}></Route>
      <Route exact path="/register" render={()=><Register/>}></Route>
      <Route exact path="/" render={()=><Home/>} /> 
      <Route exact path="/Catgory" render={()=><Catgory/>} /> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
