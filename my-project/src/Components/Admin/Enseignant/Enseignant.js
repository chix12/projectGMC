import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Enseignant.css'

class Enseignant extends React.Component{

    constructor(props){     
        super(props)
        this.state={
            enseignantList:[],
            nameFiltred:''
            
           
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

    modifierEnseignant(value){
        axios.put('/enseignant/:id' + this.props.match.params.id, { ...value })
    }
    
    handleChange=(e)=>{
        this.setState({
            nameFiltred:e.target.value
        })
    }

    render(){
        
        return(
            <div className="enseignant-container">
                <div className = "enseignant-filters" >
                    <h4>Recherche </h4>
                    <input type="text"  class="form-control enseignant-input-search" placeholder="Nom et prénom" name='nameFiltred' onChange={this.handleChange} autoComplete='off'/>
                </div>
            <div className='enseignant-table'>
                <div className="admin-enseignant-button">
                    <Link to='/admin/enseignant/ajouter'>
                        <button type="button" class="admin-add-button">+</button>
                    </Link>
                </div>
                <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <p class="nav-link active">Enseignants</p>
                            </li>
                            
                            <li class="nav-item">
                                <Link to='/etudiant_list' class="nav-link ">Etudiants</Link>
                            </li>


                        </ul>
                <table class="table">
                    <thead>
                        <tr>
                            
                            <th scope="col">Nom</th>
                            <th scope="col">Prenom</th>
                            
                            <th scope="col">Email</th>
                           

                            
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.enseignantList

                        .filter(el=>el.nom.toLowerCase().includes(this.state.nameFiltred.toLowerCase())||el.prenom.toLowerCase().includes(this.state.nameFiltred.toLowerCase()))
                        
                        .map(el=>{
                            return (
                        <tr>
                            
                            <td>{el.nom}</td>
                            <td>{el.prenom}</td>
                            
                            <td>{el.email}</td>
                            
                            <Link to={`/modifier_enseignant/${el._id}`}><td><i className="far fa-edit"></i></td></Link>
                                       

                        </tr>
                            )
                        })}
                        

                    </tbody>
                </table>
                
            </div>

        </div>
        )
    }
}

export default Enseignant