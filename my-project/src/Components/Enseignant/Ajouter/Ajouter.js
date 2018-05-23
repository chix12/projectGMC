import React from 'react'
import './Ajouter.css'
import { Link } from 'react-router-dom'

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

                <div className='add-component-duree-matiere'>
                     <input type="text"  class="form-control signup-input" id="staticEmail" placeholder="Durée"/>
                     <select class="form-control">
                        <option>Matière</option>
                    </select>
                </div>
                <div className='add-component-buttons' >
                    <button type="button" class="btn btn-primary add-button">Ajouter</button>
                    <Link to='/enseignant'>
                      <button type="button" class="btn btn-secondary add-button">Ignorer</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Ajouter