import React,{useState} from 'react'
import { Label } from 'reactstrap'
import { Progress } from 'reactstrap';
import RegisterCheck02 from './RegisterCheck02'
const RegisterCheck1 = ({Step2d , Step2 ,Step3d ,Step3}) => {
    const [Communite , setCommunite]=useState('')
    const [LederName , setLederName]=useState('')
    const [Date , setData]=useState('')
    if(Step2){
        localStorage.setItem("Communite", JSON.stringify(Communite));
        localStorage.setItem("LederName", JSON.stringify(LederName));
        localStorage.setItem("Date", JSON.stringify(Date));
  
    }
    return (
        <div>
              
            {Step2 ?<RegisterCheck02 Step3={Step3} Step3d={Step3d}/>:<> <div  data-Aos="fade-up" className="Input06">
            <div className="text-center">50%</div>
      <Progress data-Aos="fade-left" value="50" />
                        <img src="UserName.png"/>
                        
                        <input value={Communite} onChange={(e)=>setCommunite(e.target.value)} placeholder="Communite"/>
                    </div>
           
                    <div  data-Aos="fade-up" className="Input06">
                        <img src="UserName.png"/>
                        <input  value={LederName} onChange={(e)=>setLederName(e.target.value)}   placeholder="LederName"/>
                    </div>
                    <div  data-Aos="fade-up" className="Input06">
                        <img src="UserName.png"/>
                      
                        <input  value={Date} onChange={(e)=>setData(e.target.value)}  type="date"  />
                    </div>
                   
                    <div data-Aos="fade-up" className="Button">
                        <button onClick={()=>Step2d(Communite,LederName,Date)} >next</button>
                    </div></> }
           
            
                    
                  
        </div>
    )
}

export default RegisterCheck1
