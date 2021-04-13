import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="nAVbA02">
            <div className="FlexBoxNavBar">
                <img src="binpact002.png"/>
                    <div className="Text03">
                    <p>Accueil</p>
                    <p>Pourquoi Binpact</p>
                    <p>Catégories</p>
                    <p>Communautés</p>
                   <Link to="/login"><button><h2>Login</h2></button></Link> 
                   <Link to="/Register"><button><h2>Register</h2></button></Link> 
                    </div>
            </div>
        </div>
    )
}

export default Navbar
