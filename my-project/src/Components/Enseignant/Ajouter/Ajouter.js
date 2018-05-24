import React from 'react'
import './Ajouter.css'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

class Ajouter extends React.Component {
    constructor(props){
        super(props)
        this.state={
        title:"",
          content:'',
          duree:0,
          matiere:'',
          isModified:false



        }
      }

      addExamen=()=>{
        let obj={title:this.state.title,content:this.state.content,duree:this.state.duree,matiere:this.state.matiere}
        
        axios.post('/add_examen',obj).catch((error) =>{
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


     handleChangeSelect=(e)=>{
         this.setState({matiere:e.target.value})
     }
    render() {
        return(
            this.state.isModified?<Redirect to='/enseignant'/>:
            <div className='add-component-container'>
                <h1 className="add-component-header"> Ajouter Examen</h1>
                <div className='add-component-main'>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Enoncé</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Tests</a>
                        </li>
                    </ul>
                    <input type='text' placeholder='Titre' className='add-examen-title' name='title' onChange={this.handleChange}/>
                    <textarea name="text-ajoute" name='content'  placeholder='Enoncé'onChange={this.handleChange}/>
                
                
    
                
                
                
                </div>

                <div className='add-component-duree-matiere'>
                

            
                     <input type="text"  class="form-control ajouter-duree-input" id="staticEmail" placeholder="Durée (minutes)" name='duree'onChange={this.handleChange}/>
                     <select class="form-control" onChange={this.handleChangeSelect}>
                        <option selected disabled >Matière </option>
                        <option>Java Script</option>
                        <option>PHP</option>
                        <option>C++</option>
                    </select>
                </div>
                <div className='add-component-buttons' >
                    <Link to='/enseignant'>
                    <button type="button" class="btn btn-primary add-button" onClick={this.addExamen}>Ajouter</button>
                    </Link>
                    
                    <Link to='/enseignant'>
                      <button type="button" class="btn btn-secondary add-button">Ignorer</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Ajouter