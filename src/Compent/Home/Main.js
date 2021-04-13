import React,{useEffect} from 'react'
import "./Main.css"
import Aos from 'aos'
import "aos/dist/aos.css"
const Main = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <div  data-Aos="fade-up"  className="MainFlexBox">
            <div  data-Aos="fade-up" className="TextFlexBox02">
                <h4>Troquez des produits de qualité dans une communauté engagée !</h4>
                <p>Des produits verifiées et validés par nos experts ! Ofire spéciale lancement
                     gratuite pour les 2000 premiers inscrits</p>
                     <button>Bloquez votre place maintenat</button>
            </div>
            <div  data-Aos="fade-up" className="BackGroundImage6">
                <img src="Background65.png"/>
                {/* Background65 */}
            </div>
        </div>
    )
}

export default Main
