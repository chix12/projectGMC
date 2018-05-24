import React from 'react'
import './Enseignant.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

class AjouterEnseignant extends React.Component{

    constructor(props){
        super(props)
        this.state={
          prenom:'',
          nom:'',     
          email:'',
          password:'',
          

        }
      }

      addEnseignant=()=>{
        axios.post('/add_enseignant',{...this.state}).catch((error) =>{
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
            <div className='add-enseignant'>
            <form className='add-form'>
                <h1 className='signup-title'>Ajouter un enseignant </h1>
                <div className='signup-inputs' >
                    <div class="form-group row" >
                        <div class="col-sm-10" >
                            <input type="text" class="form-control signup-input" name='nom' onChange={this.handleChange} placeholder="Nom" autoComplete='off'/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <input type="text" class="form-control signup-input" name='prenom' onChange={this.handleChange} placeholder="Prénom" autoComplete='off'/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <input type="text" class="form-control signup-input" name='email' onChange={this.handleChange} placeholder="Email" autoComplete='off' />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <input type="password" class="form-control signup-input" name='password' onChange={this.handleChange} placeholder="mot de passe" autoComplete='off'/>
                        </div>
                    </div>
                </div>
                <div className='buttons'>
                <button type="button" class="btn btn-primary" onClick={this.addEnseignant}>Ajouter</button>
                <Link to='/enseignant_list'><button type="button" class="btn btn-secondary btn-retour">Retour</button></Link>
                </div>

            </form>
        </div>
        )
    }
}

export default AjouterEnseignant  