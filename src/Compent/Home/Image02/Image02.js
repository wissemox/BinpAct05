import React,{useEffect} from 'react'
import './Image038.css'
import Aos from 'aos'
import "aos/dist/aos.css"
const Image02 = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
       

        
            <div data-Aos="fade-right"  className="BackgroundPhoto" >
            <div data-Aos="fade-left" className="BackGroundPola">
              
            <img src="Rateing.png"/>
            </div>

            <div data-Aos="fade-up" className="dzdqz">
           <img className="Wissemoa" src="ImageTable03.png"/>
           <div className="dzdqz03">
           <img style={{boxShadow:"box-shadow: 10px 10px grey"}} src="ImagetABLE01.png"/>
           </div>
            </div>
            <div>
            <div>
                <div data-Aos="fade-up" className="ImageTable6">
                    <div>
                    <img src="ImageTable08.png"/>
                    </div>
                  <div className="Radio">
                  <img src="ImageTable06.png"/>
                  </div>
                </div>
               
              
            </div>
            </div>
         
        </div>
        
    )
}

export default Image02
