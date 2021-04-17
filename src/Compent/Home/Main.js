import React,{useEffect} from 'react'
import "./Main.css"
import Aos from 'aos'
import "aos/dist/aos.css"
const Main = ({BackgroundImage , setImage}) => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <div className="MainFlexBox02">
        <div className="MainFlexBox02"> 
        <div className="Space">
            
        </div>
         <div className="Input">
             <div>
             <h1>adz</h1>
             </div>
          
            
            </div>
        <div  data-Aos="fade-up"  className="MainFlexBox">
            {console.log(BackgroundImage)}
                
            <div  data-Aos="fade-up" className="TextFlexBox02">
              
                <h4>Troquez des produits de qualité dans une communauté engagée !</h4>
                <p>Des produits verifiées et validés par nos experts ! Ofire spéciale lancement
                     gratuite pour les 2000 premiers inscrits</p>
                     <button>Bloquez votre place maintenat</button>
            </div>
            <div  data-Aos="fade-up" className="BackGroundImage6">
                <img src="Ordinater.png"/>
                {/* Background65 */}
            </div>
           {BackgroundImage ?<div data-Aos="fade-up"  className="Catgories">
               <div> 
                   <div data-Aos="fade-up"  className="Button5">
                   <button data-Aos="fade-up" >Catgory</button>
                    <button data-Aos="fade-up" >Catgory</button>
                    <button data-Aos="fade-up" >Catgory</button>
                    <button data-Aos="fade-up" >Catgory</button>
                    <button data-Aos="fade-up" >Catgory</button>
                    <button data-Aos="fade-up" >Catgory</button>
                    <button data-Aos="fade-up" >Catgory</button>
                    <button data-Aos="fade-up" > Catgory</button>
                       </div>
             
               <div>
               <img src="Answer.png"/>
                   </div>
             
               </div>
          
               </div>
                :null } 
        </div>
        </div>
        </div>
        
    )
}

export default Main
