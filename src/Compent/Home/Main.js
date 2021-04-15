import React,{useEffect} from 'react'
import "./Main.css"
import Aos from 'aos'
import "aos/dist/aos.css"
const Main = ({BackgroundImage , setImage}) => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <>
       
        <div  data-Aos="fade-up"  className="MainFlexBox">
            {console.log(BackgroundImage)}
            <div  data-Aos="fade-up" className="TextFlexBox02">
                <h4>Troquez des produits de qualité dans une communauté engagée !</h4>
                <p>Des produits verifiées et validés par nos experts ! Ofire spéciale lancement
                     gratuite pour les 2000 premiers inscrits</p>
                     <button>Bloquez votre place maintenat</button>
            </div>
            <div  data-Aos="fade-up" className="BackGroundImage6">
                <img src="ImageVectoriel.png"/>
                {/* Background65 */}
            </div>
           {BackgroundImage ? <div data-Aos="fade-up"    className="Test06">
               <div data-Aos="fade-up"   className="Test08"> 
               <div data-Aos="fade-up"   className="Test07"> 
                    <div className="Button08"> 
                        <button>dz</button>
                        <button>dzq</button>
                        <button>dqz</button>
                        <button>dqz</button>
                        <button>dqz</button>
                        <button>dqz</button>
                    </div>
                    <div className="Imagec5">
                    <img src="undraw_Agreement_re_d4dv.svg"/>
                    </div>
              
               </div>
               
           </div>
           </div> :null } 
        </div>
        
        </>
    )
}

export default Main
