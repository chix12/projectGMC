import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Enseignant.css'

class Enseignant extends React.Component{

    constructor(props){     
        super(props)
        this.state={
            enseignantList:[],
            
           
        }
    }


    componentDidMount(){
        axios.get('/enseignants').then(
            res =>{
                this.setState({
                    enseignantList:res.data
                })
            }
        )
    }

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
                    <div className="enseignant-body">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <p class="nav-link active">Enseignants</p>
                            </li>
                            
                            <li class="nav-item">
                                <Link to='/etudiant_list' class="nav-link ">Etudiants</Link>
                            </li>


                        </ul>
                        <table class="table enseignant-table">
                            <thead>
                                <tr>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Prenom</th>
                                    <th scope="col">Email</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.enseignantList.map(el=>{
                                    return (
                                    <tr>
                                        <th scope="row">{el.nom}</th>
                                        <td>{el.prenom}</td>
                                        <td>{el.email}</td>
                                        <Link to={`/modifier_enseignant/${el._id}`}><td><i className="far fa-edit"></i></td></Link>
                                        
                                    </tr>
                                    )
                                })}
                                
                                
                            </tbody>
                        </table>
                    </div>
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