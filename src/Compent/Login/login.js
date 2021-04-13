import React,{useEffect} from 'react'
import './Login.css'
import Aos from 'aos'
import "aos/dist/aos.css"
const Login = () => {
    useEffect(() => {
      Aos.init({duration: 2000});
    }, [])
    return (
        // FlexBox
        <div data-Aos="fade"  className="FlexBoxLogin">
            <div>
            <div   className="InputName">
                <h2 data-Aos="fade-up">Conncte</h2>
                    <div data-Aos="fade-up" className="Username">
                    <img src="UserName.png"/>
                    <input placeholder="username"/>
                </div>

                <div  data-Aos="fade-up" className="Username">
                    <img src="Password03.png"/>
                    <input placeholder="password"/>
                </div>
                <div  data-Aos="fade-up" className="Button">
                    <button>Login</button>
                </div>
                
                </div>
               <div  data-Aos="fade-up" className="Image5">
               <img src="Flash01.png"/>
               </div>
            </div>

            <div data-Aos="fade-up" className="ImageLogin">
                <img src="LoginImage.png"/>
            </div>
        
        </div>
    )
}

export default Login
