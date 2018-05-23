import React from 'react'
import './Ajouter.css'

class Ajouter extends React.Component {
    render() {
        return(
            <div className='add-component-container'>
                <h1 className="add-component-header"> Ajouter Examen</h1>
                <div className='add-component-main'>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Enoncé</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Tests</a>
                        </li>
                    </ul>
                    <textarea name="text-ajoute" />
                </div>
                <div className='add-component-buttons' >
                    <button type="button" class="btn btn-primary">Valider</button>
                    <button type="button" class="btn btn-primary">Ignorer</button>
                </div>
            </div>
        )
    }
}

export default Ajouter