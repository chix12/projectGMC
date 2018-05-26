import React from 'react'
import './SignUp.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

class SignUp extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
          prenom:'',
          nom:'',
          numInscri:'',
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
                        <input type="text"  class="form-control signup-input" name='prenom' onChange={this.handleChange} placeholder="Prénom" autocomplete="off"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="text"  class="form-control signup-input" name='nom'  onChange={this.handleChange} placeholder="Nom" autocomplete="off"/>
                    </div>
                </div>  



                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="text"  class="form-control signup-input" name='numInscri'  onChange={this.handleChange} placeholder="N° Inscri" autocomplete="off"/>
                    </div>
                </div>  
                
                    
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="text"  class="form-control signup-input" name='email' onChange={this.handleChange} placeholder="Email" autocomplete="off"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="password" class="form-control signup-input" name='password'  onChange={this.handleChange} placeholder="Mot de passe" autocomplete="off"/>
                    </div>
                </div>
                <div class="form-group row" >
                    <div class="col-sm-10" >
                        <select class="form-control select-classe" name='classe' onChange={this.handleChange} >
                            <option selected disabled>Classe</option>
                            <option>LFI1</option>
                            <option>LFI2</option>
                            <option>LFI3 </option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="text"  class="form-control signup-input" name='voucher'  onChange={this.handleChange}placeholder="Code" autocomplete="off"/>
                    </div>
                </div>
                </div>
                 <Link to='/login'><input type="button" class="btn btn-primary" onClick={this.addEtudiant} value='Sign Up'/></Link>
                
            </form>
          
      </div>
      )
    }
}

export default SignUp
    