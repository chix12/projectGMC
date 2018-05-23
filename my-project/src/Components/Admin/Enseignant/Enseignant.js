import React from 'react'
import { Link } from 'react-router-dom'

import './Enseignant.css'

class Enseignant extends React.Component{
    render(){
        return(
            <div className="enseignant-container">
                <div className='enseignant-table'>
                    <div className="admin-enseignant-header">
                        <form class="form-inline">
                            <input class="form-control search-text" type="search" placeholder="Search" />
                                <button class="btn search-btn " type="submit">Search</button>
                        </form>   
                    </div>

                    <table class="table enseignant-table">
                        <thead>
                            <tr>
                                <th scope="col">Nom</th>
                                <th scope="col">Prenom</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mot de passe</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">John</th>
                                <td>Doe</td>
                                <td>John@Doe.com</td>
                                <td>XXXXX</td>
                            </tr>
                            <tr>
                                <th scope="row">Baklouti</th>
                                <td>Nada</td>
                                <td>Bak@nada.com</td>
                                <td>XXXXX</td>
                            </tr>
                            <tr>
                                <th scope="row">Chaima</th>
                                <td>Zelaiti</td>
                                <td>Zel@chaima.com</td>
                                <td>XXXXX</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="enseignant-add-btn">
                        <Link to='/admin/enseignant/ajouter'>
                            <button type="button" class="btn btn-primary add-button">Ajouter</button>
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default Enseignant