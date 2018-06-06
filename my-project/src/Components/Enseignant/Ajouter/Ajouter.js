import React from 'react'
import './Ajouter.css'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import AjouterExercice from './AjouterExercice'
import {connect} from 'react-redux'

class Ajouter extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:"",   
            duree:0,
            matiere:'',
            classe:'',
            date:'',
            idEnseignant:this.props.match.params.id.slice(0,-1),
            fullDate:'',
            isAdded:false,
            exercices:[] , 
            exerciceTab:['Exercice 1']   ,
            //exerciceArrayStorage: JSON.parse(localStorage.getItem('exercicetab'))  ?   JSON.parse(localStorage.getItem('exercicetab')) : []
            exerciceArray:[],
            activeIndex:0
        
        }
      }
      
      componentDidMount(){
        axios.get('/enseignant/'+this.state.idEnseignant).then(
            res =>{
                this.setState({
                    enseignant:res.data
                })
            }
        )}

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

      addExamen=()=>{
        let date = this.FormatDate(this.state.date)
       
        let obj={title:this.state.title,
            content:this.state.content,
            duree:this.state.duree,
            classe:this.state.classe,
            matiere:this.state.matiere,
            idEnseignant:this.state.idEnseignant,
            date:date,
            fullDate:this.state.date,
            test:this.state.testTab,
            answers:this.state.answers
        }
       
        axios.post('/add_examen',obj).catch((error) =>{
            console.log(error);
          });

          this.setState({
            isAdded:true
        })
        
    }
 
     handleChange=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
        
     }

    addExercice=()=>{
        this.setState({
            exerciceTab:this.state.exerciceTab.concat('Exercice '+Number(this.state.exerciceTab.length+1)),
            exerciceArray:this.state.exerciceArray.concat(Object.assign({titre:'Exercice '+Number(this.state.exerciceArray.length+1)},this.props.exercice)),
            activeIndex:this.state.activeIndex+1
        })

     }
    render() {
       
       return(
            this.state.isAdded?<Redirect to={`/enseignant/${this.state.idEnseignant}`}/>:
            <div className='add-component-container'>
                <h1 className="add-component-header"> Ajouter Examen</h1>
                <div className='add-component-main'>
                    <ul className="nav nav-tabs">
                    {this.state.exerciceTab.map((el,i)=> (
                        
                            <li className="nav-item" key={i} onClick={()=>this.setState({activeIndex:i})}>
                                <span className="nav-link" style={{color:this.state.activeIndex===i?"#007bff":""}}>{el}</span>
                            </li>
                        
                    )
                    )}
                       
                        <li className="nav-item" onClick={this.addExercice}>
                            <span className="nav-link nav-tab-add-btn" >+</span>
                        </li>
                        
                    </ul>
                    <input type='text' placeholder='Titre' className='add-examen-title' name='title' onChange={this.handleChange}/>
                 
                 <AjouterExercice exerciceProp={this.state.exerciceArray[this.state.activeIndex]}/>
                   
                  </div>
            <div className="add-component-body">
                

                <div className='add-component-duree-matiere'>          
                    <div className='duree-date' >
                        <input type="text"  className="form-control ajouter-duree-input" id="staticEmail" placeholder="Durée (minutes)" name='duree'onChange={this.handleChange}/>
                        <input type='datetime-local' className='form-control' name='date' onChange={this.handleChange} />
                    </div>
                    <div className='matiere-classe'>
                        <select className="form-control matiere" name='matiere' onChange={this.handleChange}>
                            <option selected disabled >Matière </option>
                            <option>Java Script</option>
                            <option>PHP</option>
                            <option>C++</option>
                        </select>

                        <select className="form-control classe" name='classe' onChange={this.handleChange}>
                            <option selected disabled>Classe</option>
                            <option>LFI1</option>
                            <option>LFI2</option>
                            <option>LFI3 </option>
                        </select>
                    </div>
                </div>
        </div>
            <div className='add-component-buttons' >
                <button type="button" className="btn btn-primary add-button" onClick={this.addExamen}>Ajouter Examen</button>
                <Link to='/enseignant'>
                    <button type="button" className="btn btn-secondary add-button">Ignorer</button>
                </Link>
            </div>
        </div>
        )
    }
}

const mapStateToProp = state => {
    
    return {
        exercice: state.exercice
    }
}




const AjouterContainer = connect(mapStateToProp)(Ajouter)

export default AjouterContainer