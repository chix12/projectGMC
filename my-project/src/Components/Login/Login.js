import React from 'react'
import './Login.css'


class Login extends React.Component{
    
    render(){
        return (
        <div className='login'>
            <form className='login-form'>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Mot de passe</label>
                    <input type="password" class="form-control " id="exampleInputPassword1" placeholder="mot de passe"/>
                </div>
                
                <button type="submit" class="btn btn-primary">Login</button>

                <div class="form-group form-signup">
                    <label className='signup-label'>Si vous n'avez pas de compte</label> 
                    <button type="submit" class="btn btn-success btn-signup">S'inscrire</button>      
                </div>

            </form>
      </div>
      )
    }
}

export default Login
    