import React from 'react'
import './SignUp.css'


class SignUp extends React.Component{
    
    render(){
        return (
        <div className='signup'>

        
            <form className='signup-form'>
            <h1 className='signup-title'>S'inscrire </h1>
            <div className='signup-inputs' >
                <div class="form-group row" >
                    <div class="col-sm-10" >
                        <input type="text"  class="form-control signup-input" id="staticEmail" placeholder="Prénom"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="text"  class="form-control signup-input" id="staticEmail" placeholder="Nom"/>
                    </div>
                </div>      
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="text"  class="form-control signup-input" id="staticEmail" placeholder="Email"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="password" class="form-control signup-input" id="inputPassword" placeholder="mot de passe"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="text"  class="form-control signup-input" id="staticEmail" placeholder="Classe"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="text"  class="form-control signup-input" id="staticEmail" placeholder="Voucher"/>
                    </div>
                </div>
                </div>
                 <button type="submit" class="btn btn-primary">Sign Up</button>
                
            </form>
          
      </div>
      )
    }
}

export default SignUp
    