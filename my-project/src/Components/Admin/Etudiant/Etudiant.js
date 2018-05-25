import React from 'react'
import './Etudiant.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Etudiant extends React.Component{

    constructor(props){     
        super(props)
        this.state={
            etudiantList:[],
            nameFiltred:'',
            classeFiltred:''
            
           
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


    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        console.log({...this.state})
        return(
            <div className="etudiant-container">
                <div className="etudiant-filtres" >
                    <h4>Recherche </h4>
                    <input type="text"  class="form-control enseignant-input-search" placeholder="Nom et prénom" name='nameFiltred' onChange={this.handleChange} autoComplete='off'/>
                
                    <select class="custom-select select-classe" name='classeFiltred' onChange={this.handleChange}>
                        <option selected disabled value=''>Classes</option>
                        <option value=''>Tous</option>
                        <option>LFI1</option>
                        <option>LFI2</option>
                        <option>LFI3</option>
                    </select>

                   
                </div>

                <div className='etudiant-table'>
                    <div className="admin-etudiant-button" style={{visibility:'hidden'}}>
                        <button type="button" class="admin-add-button" >+</button>
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

                            {this.state.etudiantList
                            
                              .filter( el=>(
                                
                                (el.nom.toLowerCase().includes(this.state.nameFiltred.toLowerCase()) ||
                                el.prenom.toLowerCase().includes(this.state.nameFiltred.toLowerCase()))  &&
                                el.classe.toLowerCase().includes(this.state.classeFiltred.toLowerCase())
                              )
                            )
                            .map(el=>{
                                return (
                            <tr>
                                <th scope="row">{el.numInscri}</th>
                                <td>{el.nom}</td>
                                <td>{el.prenom}</td>
                                <td>{el.classe}</td>
                                <td>{el.voucher}</td>
                                <td>{el.email}</td>
                                

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