import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


class Header extends React.Component{


    logout=()=>{
        localStorage.setItem('code', '')
        this.props.logoutFn({})
    }
    render(){
       
    return (
    this.props.user._id ?
        <nav className="navbar navbar-dark header">
            <p className="navbar-brand">   
                <span className='grey-text'>Espace {this.props.user.numInscri?'Etudiant':'Enseignant'} </span>    
            </p>
            <div className='my-header-user-logout'>
                <i className="fas fa-user user-btn"></i>
                <p className="navbar-brand"> <span className='grey-text'>{this.props.user.prenom} {this.props.user.nom}</span></p>
                
                <div className='logout' onClick={this.logout}>     
                    <Link to='/'>
                        <p className="navbar-brand"> <span className='grey-text'>Logout</span></p>
                    </Link>
                    <i className="logout-btn fas fa-sign-out-alt"></i>
                    
                </div>
            </div>
        </nav>
        : ""
    /*<nav className="navbar navbar-dark header"style={{justifyContent:'flex-end'}}>
           
               <div className='logout'>     
                    <Link to='/'>
                        <p className="navbar-brand"> <span className='grey-text'>Login</span></p>
                    </Link>
                    <i className="logout-btn fas fa-sign-out-alt"></i>
                    
                </div>
            
        </nav>*/
    )
}
}


const mapStateToProp = state => {
 //(if(!state.user) return {user:{}}
    return {
        user:state.user
    }
  }


  const mapDispatchTpProps=dispatch=>{
    return {
      logoutFn:(user)=>{
        dispatch({
          type: "SET_USER",
            user: user
        })
      }
    }
  }
  

const HeaderContainer = connect(mapStateToProp,mapDispatchTpProps)(Header);


export default HeaderContainer;
