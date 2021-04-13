import React,{useEffect} from 'react'
import './Register.css'
import Aos from 'aos'
import "aos/dist/aos.css"
const Register = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <div className="BackGroundRegister">
               <div className="Background02">
            <div data-Aos="fade-up" className="Register01">
            <h2 data-Aos="">Register</h2>
         
            <div  data-Aos="fade-up" className="Input06">
                        <img src="UserName.png"/>
                        <input  placeholder="Username"/>
                    </div>
                    <div data-Aos="fade-up" className="Input06">
                        <img src="Email.png"/>
                        <input placeholder="Email"/>
                    </div>
                    <div data-Aos="fade-up" className="Input06">
                        <img src="Email.png"/>
                        <input  placeholder="Confirm Email"/>
                    </div>
                    <div data-Aos="fade-up" className="Input06">
                        <img src="Password03.png"/>
                        <input placeholder="Password"/>
                    </div>
                    <div data-Aos="fade-up" className="Button">
                        <button>Register</button>
                    </div>
                </div>
                <div data-Aos="fade-up" className="adzd">
               <img src="Flash01.png"/>
                </div>
            
                </div>
                    
            <div>
            </div>
            <div data-Aos="fade-up" className="ImageRegister">
                <img src="LoginImage.png"/>
            </div>
        </div>
    )
}

export default Register
