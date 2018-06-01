import React from 'react'
import './Modifier.css'
import axios from 'axios'
import {Link,Redirect} from 'react-router-dom'

class Modifier extends React.Component {

    constructor(){
        super()
        this.state={
           
          title:"",
          content:'',
          duree:0,
          matiere:'',
          classe:'',
          date:'',
          idEnseignant:'',
          fullDate:'',
          isModified:false
        
        }
    }

      componentDidMount(){
        axios.get(`/examen/${this.props.match.params.id}`)
        .then(
            res =>{
                
                this.setState({

                    title:res.data.title,
                    content:res.data.content,
                    duree:res.data.duree,
                    matiere:res.data.matiere,
                    classe:res.data.classe,
                    date:res.data.date,
                    idEnseignant:res.data.idEnseignant,
                    fullDate:res.data.fullDate,
                    test : res.data.test
                    
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

      FormatDate = (date) => {
        let myDateTab = String(date).split('T')
        let myDate = myDateTab[0].split('-')
        let heure = myDateTab[1].split(':')

        let dateObj={
            annee:myDate[0],
            mois:myDate[1],
            jour:myDate[2],
            heure:heure[0] ,
            minutes:heure[1]
        }
        //return ('Y' + myDate[0] + 'M' + myDate[1] + 'D' + myDate[2] + 'T' + heure[0] + 'M' + heure [1])

        return JSON.stringify(dateObj)
      }  

      editExamen=()=>{

        let date = this.FormatDate(this.state.fullDate)
        let obj={title:this.state.title,
            content:this.state.content,
            duree:this.state.duree,
            classe:this.state.classe,
            matiere:this.state.matiere,
            idEnseignant:this.state.idEnseignant,
            date:date,
            fullDate:this.state.fullDate,
            answers:[],
            test : this.state.test
        }
        
        axios.put(`/examen/${this.props.match.params.id}`,obj)
          .catch((error) =>{
            console.log(error);
          });

          this.setState({
              isModified:true
          })
      }

    render() {
        
        return(
            
            this.state.isModified?<Redirect to={`/enseignant/${this.state.idEnseignant}`}/>:
            <div className='edit-component-container'>
                <h1 className="edit-component-header"> Modifier Enoncé</h1>
                <div className='edit-component-main'>
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="">Enoncé</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Tests</a>
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

                    <select class="form-control" name='classe' value={this.state.classe} onChange={this.handleChange}>
                        <option selected disabled>Classe</option>
                        <option>LFI1</option>
                        <option>LFI2</option>
                        <option>LFI3 </option>
                    </select>

                    <input type='datetime-local' className='form-control' name='fullDate' value={this.state.fullDate} onChange={this.handleChange}/>
                </div>

                <div className='edit-component-buttons' >
                   
                        <button type="button" class="btn btn-primary edit-button" onClick={this.editExamen}>Modifier</button>
                        <Link to={`/enseignant/${this.state.idEnseignant}`}>  <button type="button" class="btn btn-secondary edit-button">Ignorer</button> </Link>
                   
                </div>
            </div>
        )
    }
}

export default Modifier