import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import './Main03.css'
const Main03 = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <div data-Aos="fade-left" className="DisplayFlex">
            <div className="Image05s">
                <img src="Humaena5.png"/>
            </div>

            <div data-Aos="fade-right" className="TextFlexBox03">
                <div  data-Aos="fade-up"className="Textwis">
                <h2>Qu"est ce qui vous fait plaisir ? </h2>
                <p>Vous avez besoin d'un objt pour vous , votre bureau ou pour vote maison . 
                    Choisissez la catégorie et nous vous envoyons nos meilleures propositions</p>
                </div>

                <div  data-Aos="fade-up" className="Textwis">
                <h2>Qu"est ce qui vous fait plaisir ? </h2>
                <p>Vous avez besoin d'un objt pour vous , votre bureau ou pour vote maison . 
                    Choisissez la catégorie et nous vous envoyons nos meilleures propositions</p>
                </div>

                <div data-Aos="fade-up" className="Textwis">
                <h2>Qu"est ce qui vous fait plaisir ? </h2>
                <p>Vous avez besoin d'un objt pour vous , votre bureau ou pour vote maison . 
                    Choisissez la catégorie et nous vous envoyons nos meilleures propositions</p>
                </div>
            
            </div>
            <div>
                <div className="AllNumbre">
                <div className="Number">
                    <h1>1</h1>
                   
                </div>

                <div className="Number01">
                    <h1>2</h1>
                   
                </div>
                
                <div className="Number03">
                    <h1>3</h1>
                   
                </div>
                </div>
            </div>
        </div>
    )
}

export default Main03
