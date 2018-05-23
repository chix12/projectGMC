import React from 'react'
import './Modifier.css'
import Header from '../Header/Header';

class Modifier extends React.Component {
    render() {
        return(
            <div className='edit-component-container'>
                <Header />
                <h1 className="edit-component-header"> Modifier Examen</h1>
                <div className='edit-component-main'>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Enoncé</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Tests</a>
                        </li>
                    </ul>
                    <textarea name="text-modifie" />
                </div>
                <div className='edit-component-buttons' >
                    <button type="button" class="btn btn-primary">Valider</button>
                    <button type="button" class="btn btn-primary">Ignorer</button>
                </div>
            </div>
        )
    }
}

export default Modifier