import React from 'react'
import './Ajouter.css'

class Ajouter extends React.Component {
    render() {
        return(
            <div className='add-component-container'>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Enoncé</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tests</a>
                    </li>
                </ul>

            </div>
        )
    }
}

export default Ajouter