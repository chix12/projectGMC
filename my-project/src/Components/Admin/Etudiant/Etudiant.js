import React from 'react'
import './Etudiant.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Etudiant extends React.Component{

    constructor(props){     
        super(props)
        this.state={
            etudiantList:[],           
        }
    }


    componentDidMount(){
        axios.get('/etudiants').then(
            res =>{
                this.setState({
                    etudiantList:res.data
                })
            }
        )
    }
    render(){
        return(
            <div className="etudiant-container">
                <div className="filtres" >
                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Classes</option>
                        <option value="1">LFI1</option>
                        <option value="2">LFI2</option>
                        <option value="3">LFI3</option>
                    </select>

                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Groupes</option>
                        <option value="1">G1</option>
                        <option value="2">G2</option>
                        <option value="3">G3</option>
                    </select>
                </div>
                <div className='etudiant-table'>
                    <div className="admin-etudiant-button">
                        <button type="button" class="admin-add-button">+</button>
                    </div>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <p class="nav-link active" >Etudiants </p>
                        </li>
                        <li class="nav-item">
                            <Link to='/enseignant_list' class="nav-link " href="#">Enseignants</Link>
                        </li>


                    </ul>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">N°Insc</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Prenom</th>
                                <th scope="col">Classe</th>
                                <th scope="col">Voucher</th>
                                <th scope="col">Email</th>
                                
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.etudiantList.map(el=>{
                                return (
                            <tr>
                                <th scope="row">{el.numInscri}</th>
                                <td>{el.nom}</td>
                                <td>{el.prenom}</td>
                                <td>{el.classe}</td>
                                <td>{el.voucher}</td>
                                <td>{el.email}</td>
                                <Link to={`/modifier_etudiant/${el._id}`}><td><i className="far fa-edit" ></i></td></Link>

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

export default Etudiant