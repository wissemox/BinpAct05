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
import MapTrouves from './MapTrouvesNos/MapTrouves'
import Sponsur from './Sponsur'
import Sponsur05 from './Sponsur05'
import Catgor from './Catgor'
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
                <Catgor/>
                <Produits/>
            <Main02 BackgroundImage={BackgroundImage}/>
          
            </div>
           
            <Main03/>
            <Image/>
            <Image02/>
            <MapTrouves/>
           <Sponsur/>
           <Sponsur05/>
            </div>
           
        </div>
     
    )
}

export default Home
