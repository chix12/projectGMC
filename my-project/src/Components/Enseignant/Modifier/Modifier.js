import React from 'react'
import './Modifier.css'
import axios from 'axios'
import {Link,Redirect} from 'react-router-dom'

class Modifier extends React.Component {

    constructor(){
        super()
        this.state={
           
            title:'',
            content:'',
            duree:0,
            matiere:'',
            isModified:false
        
        }
    }

      componentDidMount(){
        axios.get(`/examen/${this.props.match.params.id}`)
        .then(
            res =>{
                
                this.setState({
                   
                    title: res.data.title,
                    content: res.data.content,
                    duree: res.data.duree,
                    matiere: res.data.matiere,
                    
                })
            }
        )
        .catch((error) =>{
            console.log(error);
          }); 
    }

    handleChange=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        })
      }


      editExamen=()=>{

        let obj={title:this.state.title,content:this.state.content,duree:this.state.duree,matiere:this.state.matiere}
          axios.put(`/examen/${this.props.match.params.id}`,obj)
          .catch((error) =>{
            console.log(error);
          });

          this.setState({
              isModified:true
          })
          

         
      }


      change=(e)=>{
          console.log(String(e.target.value).split('T'))
          
      }
    
    render() {
        
        return(
            
            this.state.isModified?<Redirect to='/enseignant'/>:
            <div className='edit-component-container'>
                <h1 className="edit-component-header"> Modifier Examen</h1>
                <div className='edit-component-main'>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Enoncé</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Tests</a>
                        </li>
                    </ul>
                    <input type='text' placeholder='Titre' value={this.state.title} className='edit-examen-title' name='title' onChange={this.handleChange}/>
                    <textarea name='content' placeholder='Enoncé' value={this.state.content}onChange={this.handleChange}/>  
                </div>

                <div className='edit-component-duree-matiere'>
                     <input type="text"  class="form-control modifier-duree-input"  placeholder="Durée" value={this.state.duree} name='duree'onChange={this.handleChange}/>
                     <select class="form-control" name='matiere' value={this.state.matiere} onChange={this.handleChange}>
                        <option selected disabled >Matière </option>
                        <option>Java Script</option>
                        <option>PHP</option>
                        <option>C++</option>
                    </select>

                    <select class="form-control" name='classe' onChange={this.handleChange}>
                        <option selected disabled>Classe</option>
                        <option>LFI1</option>
                        <option>LFI2</option>
                        <option>LFI3 </option>
                    </select>

                    <input type='datetime-local' className='form-control' onChange={this.change}/>
                </div>

                <div className='edit-component-buttons' >
                   
                        <button type="button" class="btn btn-primary edit-button" onClick={this.editExamen}>Modifier</button>
                        <Link to='/enseignant'>  <button type="button" class="btn btn-secondary edit-button">Ignorer</button> </Link>
                   
                </div>
            </div>
        )
    }
}

export default Modifier