import React,{useEffect , useState} from 'react'
import './Register.css'
import Aos from 'aos'
import "aos/dist/aos.css"
const Register = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    const[userName , setuserName]=useState('')
    const[Email , setuserEmail]=useState('')
     const[confirmEmail , setconfirmEmail]=useState('')
     const[password , setpassword]=useState('')
    return (
        <div className="BackGroundRegister">
               <div className="Background02">
            <div data-Aos="fade-up" className="Register01">
            <h2 data-Aos="">Register</h2>
            {userName.length===0 ? <p>Empty username</p>:null}
                    {Email.length===0 ? <p>Empty Email</p>:null}
                    {confirmEmail.length===0 ? <p>Empty ConfirmEmail</p>:null}
                    {password.length===0 ? <p>Empty password</p>:null}
            <div  data-Aos="fade-up" className="Input06">
                        <img src="UserName.png"/>
                        <input value={userName}  onChange={(e)=>setuserName(e.target.value)} placeholder="Username"/>
                    </div>
                    <div data-Aos="fade-up" className="Input06">
                        <img src="Email.png"/>
                        <input value={Email} onChange={(e)=>setuserEmail(e.target.value)} placeholder="Email"/>
                    </div>
                    <div data-Aos="fade-up" className="Input06">
                        <img src="Email.png"/>
                        <input value={confirmEmail} onChange={(e)=>setconfirmEmail(e.target.value)}   placeholder="Confirm Email"/>
                    </div>
                    <div data-Aos="fade-up" className="Input06">
                        <img src="Password03.png"/>
                        <input  value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password"/>
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
