import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
const Produitsmap = ({el}) => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <div data-Aos="fade-left" className="ProduitsMap03">
            <div className="Backgroundhwite">
                <img src={el.Image}/>
                
            </div>
            <div className="Text06">
                <p>Nom Product:</p>
            <p>{el.Name}</p>
            </div>
            <div className="Descraption">
                <p>{el.Descraption}</p>
            </div>
            <div className="Prix03">
                <p>Prix:</p>
                <p>{el.Prix}</p>
            </div>
            <div className="Trouvez">        
            <button>Trouquez maintenant</button>
            </div>
            
        </div>
    )
}

export default Produitsmap
