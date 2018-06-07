import React from 'react'
import './Modifier.css'
import axios from 'axios'
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

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
          isModified:false,
          exercices: [],
                /*exercice :{
                titre,
                content,
                TestTab
            }*/
            exercice:{},
          activeIndex: 0
        
        }
    }


      componentDidMount(){
        axios.get(`/examen/${this.props.match.params.id}`)
        .then(
            res =>{

                this.setState({
                    title:res.data.title,
                    duree:res.data.duree,
                    matiere:res.data.matiere,
                    classe:res.data.classe,
                    date:res.data.date,
                    idEnseignant:res.data.idEnseignant,
                    fullDate:res.data.fullDate,
                    exercices : res.data.exercices,
                    content : res.data.exercices[this.state.activeIndex].content
                })
            }

        )
        .catch((error) =>{
            console.log(error);
          }); 
    }

    handleChange=(e)=>{
        this.setState({
          [e.target.name]:e.target.value,

          exercices: this.state.exercices.map((el, i) => {

                if (i === this.state.activeIndex) {

                    return Object.assign(this.state.exercices[this.state.activeIndex], e.target.name === 'content' && { [e.target.name]: e.target.value })
                }
                else return el
            })
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
        return JSON.stringify(dateObj)
      }  

      editExamen=()=>{

        let date = this.FormatDate(this.state.fullDate)
        let obj={title:this.state.title,
            
            duree:this.state.duree,
            classe:this.state.classe,
            matiere:this.state.matiere,
            idEnseignant:this.state.idEnseignant,
            date:date,
            fullDate:this.state.fullDate,
            exercices : this.state.exercices, 
            activeIndex: 0
        }
        console.log(this.state.exercices);
        
          axios.put(`/examen/${this.props.user._id}`,obj)
          .catch((error) =>{
            console.log(error);
          });

          this.setState({
              isModified:true
          })
      }


    onClickExerciceItem = (i) => {

        this.setState({
            activeIndex: i,
            content : this.state.exercices[i] ? this.state.exercices[i].content : ""
        })
    }

    render() {
        
        return(
            
            this.state.isModified?<Redirect to={`/enseignant/${this.state.idEnseignant}`}/>:
            <div className='edit-component-container'>
                <h1 className="edit-component-header"> Modifier Enoncé</h1>
                <div className='edit-component-main'>
                        <input type='text' placeholder='Titre' value={this.state.title} className='edit-examen-title' name='title' onChange={this.handleChange} />
                        <div className = "edit-component-nav-tabs">
                            <ul className="nav nav-tabs">
                                {this.state.exercices.map((el, i) => (
                                    <li className="nav-item exercice-item" name="exercices"  key={i} onClick={()=> {this.onClickExerciceItem(i)}}>
                                        <span className="nav-link" style={{color: this.state.activeIndex === i && "#007bff"}}>{el.titre}</span>
                                    </li>                                  
                                ))}
                            </ul>
                            
                            <textarea value={this.state.content} style={{ width: '100%' }} name='content' placeholder='Enoncé' onChange={this.handleChange} />
                        </div>
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
                        <Link to={`/enseignant/${this.props.user._id}`}>  
                            <button type="button" class="btn btn-secondary edit-button">Ignorer</button>
                         </Link>
                   
                </div>
            </div>
        )
    }
}

const mapStateToProp = state => {
    if (!state.user) return { user: {} }
    return {
        user: state.user
    }
}

const ModifierContainer = connect(mapStateToProp)(Modifier)

export default ModifierContainer