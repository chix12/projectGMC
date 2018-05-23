import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
    <nav class="navbar navbar-dark">
            <p className="navbar-brand" href="#"> 
                <span className='grey-text'>Espace Enseignant / Etudiant </span>
            </p>
            <div className='my-header-user-logout'>
                <p className="navbar-brand"> <span className='grey-text'> Name </span></p>
                <div className='logout'> 
                    
                    <Link to='/'><p className="navbar-brand"> 
                        <span className='grey-text'>Logout</span>
                    </p></Link>
                    <i className="logout-btn fas fa-sign-out-alt"></i>
                </div>
            </div>
    </nav>
    )
}

export default Header