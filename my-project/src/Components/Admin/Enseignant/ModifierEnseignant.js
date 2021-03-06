import React from 'react'
import './Enseignant.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ModifierEnseignant extends React.Component{

    constructor(props){
        super(props)
        this.state={
          prenom:'',
          nom:'',     
          email:'',
          password:''

         
          

        }
      }


      componentDidMount(){
        axios.get(`/enseignant/${this.props.match.params.id}`)
        .then(
            res =>{
                
                this.setState({
                    nom:res.data.nom,
                    prenom:res.data.prenom,
                    email:res.data.email,
                    password:res.data.password
                })
            }
        )
        .catch((error) =>{
            console.log(error);
          }); 
    }

      editEnseignant=()=>{
        let obj={nom:this.state.nom,prenom:this.state.prenom,email:this.state.email,password:this.state.password}
          axios.put(`/enseignant/${this.props.match.params.id}`,obj)
          .catch((error) =>{
            console.log(error);
          });

          this.setState({
              isModified:true
          })
          

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
                            <input type="text" class="form-control signup-input" value={this.state.nom}name='nom' onChange={this.handleChange} placeholder="Nom" autoComplete='off'/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <input type="text" class="form-control signup-input" value={this.state.prenom} name='prenom' onChange={this.handleChange} placeholder="Prénom" autoComplete='off'/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <input type="text" class="form-control signup-input" value={this.state.email} name='email' onChange={this.handleChange} placeholder="Email" autoComplete='off' />
                        </div>
                    </div>
                    
                </div>
                <div className='buttons'>
                <Link to='/enseignant_list'>
                <button type="button" class="btn btn-primary" onClick={this.editEnseignant}>Modifier</button>
                </Link>
                <Link to='/enseignant_list'>
                    <button type="button" class="btn btn-secondary btn-retour">Retour</button>
                </Link>
                </div>

            </form>
        </div>
        )
    }
}

export default ModifierEnseignant  