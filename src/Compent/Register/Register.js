import React,{useEffect , useState} from 'react'
import './Register.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import RegisterCheck01 from './RegisterCheck1'
import { Progress } from 'reactstrap';
const Register = ({Test,Bloena,Step2d,Step2,Step3d ,Step3}) => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    const[userName , setuserName]=useState('')
    const[Email , setuserEmail]=useState('')
     const[confirmEmail , setconfirmEmail]=useState('')
     const[password , setpassword]=useState('')
     const[BolenUsername , SetBolenUsername]=useState(false)
    if(Bloena){
        localStorage.setItem("username", JSON.stringify(userName));
        localStorage.setItem("Email", JSON.stringify(Email));
        localStorage.setItem("confirmEmail", JSON.stringify(confirmEmail));
        localStorage.setItem("password", JSON.stringify(password));
    }
   
  
    return (
        <div className="BackGroundRegister">
            
               <div className="Background02">
            <div data-Aos="fade-up" className="Register01">
            <h2 data-Aos="">Register</h2>
            {console.log(BolenUsername)}
            
            {Bloena ?<RegisterCheck01 Step3d={Step3d} Step2d={Step2d} Step2={Step2} Step3={Step3} />: <> 
                <div  data-Aos="fade-up" className="Input06">
                    <div className="text-center">0%</div>
                    <Progress />
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
                        <button onClick={()=>Test(userName,Email,confirmEmail,password)} >Register</button>
                    </div>
                    
            </> }
           
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
