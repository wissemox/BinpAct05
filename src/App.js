import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import Login from './Compent/Login/login'
import Register from './Compent/Register/Register'
import {BrowserRouter ,Route} from 'react-router-dom'
import Home from './Compent/Home/Home'
import Catgory from './Compent/Catgory/Catgory'
import Producdt from './Compent/Home/Product03'
import "aos/dist/aos.css"
function App() {
  // Function
    // 1 userName 
  const [Bloena  , setBolen ]=useState(false)
  const [Step2  , setStep2 ]=useState(false)
  const [Step3  , setStep3 ]=useState(false)
  const Test =(UserName,Email , ConfirmEmail , password)=>{
    if(UserName && UserName.length>6 && Email && ConfirmEmail && Email===ConfirmEmail &&Email.includes('@')&&ConfirmEmail.includes('@')  ){
      console.log('dqzdq')
      setBolen(true)
      console.log(Bloena)
    }else{
      console.log("le")
    }
  }
  // Setp2 
  const Step2d =(Communite,LederName , Date ,Sex)=>{
    if(Communite && LederName && Date && Sex  ){
      console.log('dqzdq')
      setStep2(true)
      console.log(Step2)
    }else{
      console.log("le")
    }
  }
  //setp3
  const Step3d =(LederNamed,Test  )=>{
    if(LederNamed && Test  ){
      console.log('dqzdq')
      setStep3(true)
      console.log(Step3)
    }else{
      console.log("le")
    }
  }
  return (
    
    <div className="App">
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
      <BrowserRouter>
      <Route exact path="/login" render={()=><Login/>}></Route>
      <Route exact path="/register" render={()=><Register Test={Test} Bloena={Bloena} Step2d={Step2d} Step2={Step2} Step3d={Step3d} Step3={Step3} />}></Route>
      {/* <Route exact path="/register/1" render={()=><Register Test={Test} Bloena={Bloena} />}></Route> */}
      <Route exact path="/" render={()=><Home/>} /> 
      
      <Route exact path="/Catgory" render={()=><Catgory/>} /> 
      <Route exact path="/Product" render={()=><Catgory/>} />
      <Route exact path="/Product01" render={()=><Producdt/>} />
      {/* Producdt */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
