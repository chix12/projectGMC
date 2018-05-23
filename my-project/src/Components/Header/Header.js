import React from 'react'
import './Header.css'

const Header = () => {
    return (
    <nav class="navbar navbar-dark bg-primary">
           <p clpss="navbar-brand" href="#">Espace Enseignant / Etudiant</p>
            <div className='my-header-user-logout'>
                <p class="navbar-brand"> Name </p>
                <div className='logout'> 
                    <p class="navbar-brand">Logout</p>
                    <i className="logout-btn fas fa-sign-out-alt"></i>
                </div>
            </div>
    </nav>
    )
}

export default Header