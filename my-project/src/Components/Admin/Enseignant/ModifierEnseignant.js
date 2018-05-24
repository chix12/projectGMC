import React from 'react'
import './Enseignant.css'
import axios from 'axios'

class ModifierEnseignant extends React.Component{

    constructor(props){
        super(props)
        this.state={
          prenom:'',
          nom:'',     
          email:'',
          password:'',
          

        }
      }

      editEnseignant=()=>{
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
            <div className='edit-enseignant'>
            <form className='edit-form'>
                <h1 className='signup-title'>Modifier Enseignant </h1>
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
                    
                </div>
                <div className='buttons'>
                <button type="submit" class="btn btn-primary" onClick={this.addEnseignant}>Ajouter</button>
                <button type="submit" class="btn btn-secondary btn-retour">Retour</button>
                </div>

            </form>
        </div>
        )
    }
}

export default ModifierEnseignant  