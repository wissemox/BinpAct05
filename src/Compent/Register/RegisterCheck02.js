import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import { Progress } from 'reactstrap';
const RegisterCheck02 = ({Step3d , Step3}) => {
    const [UserName , setUsername]=useState('')
    const [Test , setTest]=useState('')
    return (
        <div>
               <div className="text-center">75%</div>
      <Progress data-Aos="fade-left" value="75" />
                {Step3 ? <Redirect to="/login"/> : <>
                <div  data-Aos="fade-up" className="Input06">

             
<img src="UserName.png"/>
{console.log(UserName)}
<input value={UserName}  onChange={(e)=>setUsername(e.target.value)}  placeholder="LederName"/>
</div>
<div  data-Aos="fade-up" className="Input06">
<img src="UserName.png"/>

<input  value={Test} onChange={(e)=>setTest(e.target.value)}  placeholder="Test" />
{console.log(Test)}
<div data-Aos="fade-up" className="Button">
<button onClick={()=>Step3d(UserName,Test)} >next</button>
</div>
</div>
                </>}
          
        </div>
    )
}

export default RegisterCheck02
