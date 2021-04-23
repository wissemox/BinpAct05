import React,{useState} from 'react'
import './Catgory.css'
import ModalCatgory from'./CatgoryModal'  
import {Link} from 'react-router-dom'
const Catgor = () => {
    const[Bollen , setBollen]=useState(false)
    return (
        <div>
            <div className="NavBa55">
                <div className="Catgory4">
                    <div className="Catgory5">
                        <p id="Catégorie" onClick={()=>setBollen(!Bollen)}>Catégorie</p>
                    </div>
                    <div>
                       <p id="sousCatgory"> Sus Catégorie</p> 
                  
                    </div>
                    <div>
                       <p> Ville</p> 
                    </div>
                    <div>
                       <p> Prix en binz</p> 
                    </div>
                    <div>
                       <p> Rating user</p> 
                    </div>
                    <div>
                       <p> Caractéristique</p> 
                    </div>
                    <div className="Reserche">
                        <img src="Reserche.png"/>
                    </div>
                </div>
                
            </div>
            {Bollen ?  <div className="Modal">
                {/* 1 */}
               

                <div className="Modal1">
               <Link to="/product01"> <p onClick={()=> localStorage.setItem('Catgory', 'Ordinater')}>pc Ordinateur</p></Link>
              <Link to="/product01">  <p onClick={()=> localStorage.setItem('Catgory', 'Smartphone')}>Smartphones</p> </Link>
              <Link to="/product01"><p>Accessoire oridnater</p></Link>  
              <Link to="/product01"> <p>Stockage</p> </Link>
              <Link to="/product01">  <p>Impression</p></Link>
               <Link to="/product01"><p>Tablette et phone</p></Link> 
               <Link to="/product01">   <p>Image et son</p></Link>
               <Link to="/product01"> <p>Gaming</p></Link>
                </div>
            </div> :null}
          
            
        </div>
    )
}

export default Catgor
