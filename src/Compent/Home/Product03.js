import React,{useState} from 'react'
import Catgory from '../Catgory/Catgory'
import Product03Map  from './Product03Map'
import './product02.css'
const Producdt = () => {
    var aValue = localStorage.getItem('Catgory')

    const [Product , setProduct ]=useState([{
        Catgory:"Smartphone", 
        Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png"
    
    },
    {
        Catgory:"Smartphone", 
        Image:"https://www.presse-citron.net/app/uploads/2019/09/iphone-11-apple.jpg"
    
    },
    {
        Catgory:"Smartphone", 
        Image:"https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/navigation/a-series/a53s/A53s-navigation-blue-v2.png"
    
    },
    {
        Catgory:"Smartphone", 
        Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png"
    
    },
    {
        Catgory:"Smartphone", 
        Image:"https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/navigation/a-series/a53s/A53s-navigation-blue-v2.png"
    
    },
    
    {
        Catgory:"Voitere", 
        Image:"https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
    },
    {
        Catgory:"Ordinater", 
        Image:"https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
    },
      {
        Catgory:"Ordinater", 
        Image:"https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
    },
    {
        Catgory:"Ordinater", 
        Image:"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/HP_OMEN_15_2020_Ryzen4800H_RTX2060_3.jpg"
    },
    {
        Catgory:"Ordinater", 
        Image:"https://www.savanna.tn/53807-home_default/msi-pc-portable-ge66-raider-10sf-i7-10eme-gen-16go-1-to-ssd.jpg"
    },
    {
        Catgory:"Ordinater", 
        Image:"https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
    }
    ])
    return (
        <div>
            <div className="NavItem">
                <img src="binpact002.png"/>
            </div>
            {console.log(aValue)}
            <div className="ProductFilter">
          {Product.filter(word => word.Catgory===aValue).map((el)=><Product03Map el={el}/>)}
          </div>
        </div>
    )
}

export default Producdt
