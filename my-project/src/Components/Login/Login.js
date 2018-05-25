import React from 'react'
import './Login.css'
import {Link, Redirect} from 'react-router-dom'
import SignUp from '../Etudiant/SignUp/SignUp'
import axios from 'axios'
import RadioButton from './RadioButton'


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
               id:'',
               email:'',
               password:'',
               statut:''
               
        }
    }

    fetchEnseignant=()=>{
        axios.get(`/enseignant/${this.state.email}/${this.state.password}`).then(
            res =>{
 
                if(res.data._id){
                    this.setState({
                        id:res.data._id,
                        statut:'enseignant'   
                    })
                }
                else{
                    alert ("email ou mot de passe incorrect")
                }
                

                
            }
        ).catch(err=>console.log(err))  
    }


    loginFunc=()=>{
            axios.get(`/etudiant/${this.state.email}/${this.state.password}`).then(
                res =>{
    
                    if(res.data._id){
                        this.setState({
                            id:res.data._id, 
                            statut:'etudiant'  
                        })
                    }
                    else{
                        this.fetchEnseignant()
                    }
             
                }
            ).catch(err=>console.log(err))  
            
            
    }

      handleChange=(e)=>{   
            this.setState({
                [e.target.name]:e.target.value
            })     
      }

     
    
    render(){
        console.log(this.state.statut)
        return (
            this.state.id ? <Redirect to={`/${this.state.statut}/${this.state.id}`}  /> :
            <div className='login'>


 
                <form className='login-form'>

        
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" name='email' onChange={this.handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Mot de passe</label>
                        <input type="password" class="form-control " name='password' onChange={this.handleChange} id="exampleInputPassword1" placeholder="mot de passe"/>
                    </div>

                                        

                    <button type="button" onClick={this.loginFunc} class="btn btn-primary">Login</button>
                    

                    <div class="form-signup">
                        <label className='signup-label'>Si vous n'avez pas de compte</label> 
                        <Link to='/signup' style={{width:'100%'}}>
                            <div className='login-btn-signup' >
                                <button type="button" class="btn btn-success btn-signup">S'inscrire</button> 
                            </div>
                        </Link>     
                    </div>

                </form>
        </div>
      )
    }
}

export default Login
    