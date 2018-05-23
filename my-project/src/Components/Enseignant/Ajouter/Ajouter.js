import React from 'react'
import './Ajouter.css'
import axios from 'axios'

class Ajouter extends React.Component {
    constructor(props){
        super(props)
        this.state={
        title:"",
          content:'',
          duree:0,
          matiere:'',



        }
      }

      addExamen=()=>{
        axios.post('/add_examen',{...this.state}).catch((error) =>{
            console.log(error);
          });
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
                     <input type="text"  class="form-control signup-input" id="staticEmail" placeholder="Durée" name='duree'onChange={this.handleChange}/>
                     <select class="form-control" onChange={this.handleChangeSelect}>
                        <option>Matière 1</option>
                        <option>Matière 2</option>
                        <option>Matière 3</option>
                    </select>
                </div>
                <div className='add-component-buttons' >
                    <button type="button" class="btn btn-primary add-button" onClick={this.addExamen}>Ajouter</button>
                    <button type="button" class="btn btn-secondary add-button">Ignorer</button>
                </div>
            </div>
        )
    }
}

export default Ajouter