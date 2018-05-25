import React from 'react'
import './Etudiant.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ModifierEtudiant extends React.Component{

    constructor(props){
        super(props)
        this.state={
          numInscri :'',  
          prenom:'',
          nom:'',     
          classe:'',
          email:'',
          password:''
         
        }
      }


      componentDidMount(){
        axios.get(`/etudiant/${this.props.match.params.id}`)
        .then(
            res =>{
                this.setState({
                    numInscri:res.data.numInscri,
                    nom:res.data.nom,
                    prenom:res.data.prenom,
                    classe:res.data.classe,
                    email:res.data.email,
                    password:res.data.password
                })
            }
        )
        .catch((error) =>{
            console.log(error);
          }); 
    }

      editEtudiant=()=>{
        let obj={numInscri:this.state.numInscri,
                 nom:this.state.nom,
                 prenom:this.state.prenom,
                 classe : this.state.classe,
                 email:this.state.email,
                 password:this.state.password
                }
        
          axios.put(`/etudiant/${this.props.match.params.id}`,obj)
          .catch((error) =>{
            console.log(error);
          });

         
          

     }
 
     handleChange=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
        
     }



    render(){
        return(
            <div className='edit-enseignant'>
            <form className='edit-form'>
                <h1 className='signup-title'>Modifier Enseignant </h1>
                <div className='signup-inputs' >
                        <div class="form-group row" >
                            <div class="col-sm-10" >
                                <input type="text" class="form-control signup-input" value={this.state.numInscri} name='numInscri' onChange={this.handleChange} placeholder="Numero d'Inscription" autoComplete='off' />
                            </div>
                        </div>
                    <div class="form-group row" >
                        <div class="col-sm-10" >
                            <input type="text" class="form-control signup-input" value={this.state.nom}name='nom' onChange={this.handleChange} placeholder="Nom" autoComplete='off'/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <input type="text" class="form-control signup-input" value={this.state.prenom} name='prenom' onChange={this.handleChange} placeholder="Prénom" autoComplete='off'/>
                        </div>
                    </div>
                        <div class="form-group row" >
                            <div class="col-sm-10" >
                                <input type="text" class="form-control signup-input" value={this.state.classe} name='classe' onChange={this.handleChange} placeholder="Classe" autoComplete='off' />
                            </div>
                        </div>
                    
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <input type="text" class="form-control signup-input" value={this.state.email} name='email' onChange={this.handleChange} placeholder="Email" autoComplete='off' />
                        </div>
                    </div>
                    
                </div>
                <div className='buttons'>
                    <Link to='/etudiant_list'>
                    <button type="button" class="btn btn-primary" onClick={this.editEtudiant}>Modifier</button>
                    </Link>               
                <Link to='/etudiant_list'>
                    <button type="button" class="btn btn-secondary btn-retour">Retour</button>
                </Link>
                </div>

            </form>
        </div>
        )
    }
}

export default ModifierEtudiant  