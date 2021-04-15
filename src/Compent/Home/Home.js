import React,{useEffect ,useState} from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Main02 from './Main02'
import Card from './Card'

import Aos from 'aos'
import "aos/dist/aos.css"
import Main03 from './Main03/Main03'
import Produits from './Produits/Produits'
import Image from './Image/image'
import Image02 from './Image02/Image02'
const Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
      const [BackgroundImage , setImage]=useState(false)
    return (
        <div>
            
                
            <div className="NavBar">
            <Navbar BackgroundImage={BackgroundImage} setImage={setImage}/>
            
            <Main BackgroundImage={BackgroundImage} setImage={setImage}/>
            <div data-Aos="fade-up" >
            <Main02 BackgroundImage={BackgroundImage}/>
            </div>
            <div className="Text5">
                <p>Comment ca mache ?</p>
                <span>C'est trés simple , juste quelques clics!</span>
            </div>
            <Main03/>
            <Produits/>
            <Image/>
            <Image02/>
            <div className="Text"> <p>azd</p></div>
            <div className="Textdz03"><p>azdad</p></div>
            </div>
           
        </div>
     
    )
}

export default Home
