import React from 'react'
import './Login.css'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'

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

    componentDidMount(){
        this.props.setUser({})
    }
    

    fetchEnseignant=()=>{
        axios.get(`/enseignant/${this.state.email}/${this.state.password}`).then(
            res =>{
 
                if(res.data._id){
                    this.setState({
                        id:res.data._id,
                        statut:'enseignant'   
                    })

                   
                    this.props.setUser(res.data)
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
                        this.props.setUser(res.data)
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
       
        return (
            this.state.id ? <Redirect to={`/${this.state.statut}/${this.state.id}`}  /> :
            <div className='login'>            
                <form className='login-form'>
        
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" name='email' onChange={this.handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Mot de passe</label>
                        <input type="password" className="form-control " name='password' onChange={this.handleChange} id="exampleInputPassword1" placeholder="mot de passe"/>
                    </div>

                                        

                    <button type="button" onClick={this.loginFunc} className="btn btn-primary">Login</button>
                    

                    <div className="form-signup">
                        <label className='signup-label'>Si vous n'avez pas de compte</label> 
                        <Link to='/signup' style={{width:'100%'}}>
                            <div className='login-btn-signup' >
                                <button type="button" className="btn btn-success btn-signup">S'inscrire</button> 
                            </div>
                        </Link>     
                    </div>

                </form>
        </div>
      )
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
      setUser: (user) => {
        dispatch({
          type: "SET_USER",
          user: user
        })
      }
    }
  }

const LoginContainer = connect(null, mapDispatchToProps)(Login);

export default LoginContainer