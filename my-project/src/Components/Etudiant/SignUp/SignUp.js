import React from 'react'
import './SignUp.css'
import axios from 'axios'

class SignUp extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
          prenom:'',
          nom:'',
          email:'',
          password:'',
          classe:'',
          voucher:''

        }
      }

      addEtudiant=()=>{
        axios.post('/add_etudiant',{...this.state}).catch((error) =>{
            console.log(error);
          });
     }
 
     handleChange=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
        
     }

    render(){
        return (
        <div className='signup'>

        
            <form className='signup-form'>
            <h1 className='signup-title'>S'inscrire </h1>
            <div className='signup-inputs' >
                <div class="form-group row" >
                    <div class="col-sm-10" >
                        <input type="text"  class="form-control signup-input" name='prenom' onChange={this.handleChange} placeholder="Prénom"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="text"  class="form-control signup-input" name='nom'  onChange={this.handleChange} placeholder="Nom"/>
                    </div>
                </div>      
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="text"  class="form-control signup-input" name='email' onChange={this.handleChange} placeholder="Email"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="password" class="form-control signup-input" name='password'  onChange={this.handleChange} placeholder="mot de passe"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="text"  class="form-control signup-input" name='classe' onChange={this.handleChange} placeholder="Classe"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="text"  class="form-control signup-input" name='voucher'  onChange={this.handleChange}placeholder="Code"/>
                    </div>
                </div>
                </div>
                 <input type="button" class="btn btn-primary" onClick={this.addEtudiant} value='Sign Up'/>
                
            </form>
          
      </div>
      )
    }
}

export default SignUp
    