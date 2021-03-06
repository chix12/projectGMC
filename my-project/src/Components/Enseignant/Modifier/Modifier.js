import React from 'react'
import './Modifier.css'
import EditModalTest from './EditModalTest'
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
          activeIndex: 0,
          inputData : [],
          outputData : "",
          testTab : []
        }
    }


      componentDidMount(){
        axios.get(`/examen/${this.props.match.params.id}`)
        .then(
            res =>{
                let exercices=res.data.exercices
                this.setState({
                    title:res.data.title,
                    duree:res.data.duree,
                    matiere:res.data.matiere,
                    classe:res.data.classe,
                    date:res.data.date,
                    idEnseignant:res.data.idEnseignant,
                    fullDate:res.data.fullDate,
                    exercices : exercices,
                    content : exercices[this.state.activeIndex].content,
                    testTab: exercices[this.state.activeIndex].testTab
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

    handleInputChange = (e) => {
        let inputString = e.target.value
        if (inputString.length > 0) {
            let outputTab = inputString.split(',')
            for (let i = 0; i < outputTab.length; i++) {
                if (outputTab[i].toLowerCase().trim() === 'true')
                    outputTab[i] = true
                else if ((outputTab[i].toLowerCase().trim() === 'false'))
                    outputTab[i] = false
                else if (!isNaN(parseInt(outputTab[i])))
                    outputTab[i] = Number(outputTab[i])
                else
                    outputTab[i] = String(outputTab[i])
            }

            this.setState({
                inputData: outputTab
            })
        }
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
        let obj={
            title:this.state.title,
            duree:this.state.duree,
            classe:this.state.classe,
            matiere:this.state.matiere,
            idEnseignant:this.state.idEnseignant,
            date:date,
            fullDate:this.state.fullDate,
            exercices : this.state.exercices, 
            activeIndex: 0
        }
       
          axios.put(`/examen/${this.props.match.params.id}`,obj)
          .catch((error) =>{
            console.log(error);
          });

          this.setState({
              isModified:true
          })
      }

    addTest = () => {
        let test = {
            input: this.state.inputData,
            expectedOutput: this.state.outputData
        }

       
        this.setState({
            testTab: this.state.testTab.concat(test),
            inputData: [],
            outputData: "",

            exercices: this.state.exercices.map((el, i) => {
                if (i === this.state.activeIndex) {
                    return Object.assign(this.state.exercices[this.state.activeIndex], { testTab: this.state.testTab.concat(test) })
                }
                else return el
            })

        })

    }

    onClickExerciceItem = (i) => {

        this.setState({
            activeIndex: i,
            content : this.state.exercices[i].content ,
            testTab:this.state.exercices[i].testTab
        })
    }

    render() {
    console.log('testTab',this.props.testTab)
        return(            
            this.state.isModified?<Redirect to={`/enseignant/${this.state.idEnseignant}`}/>:
            <div className='edit-component-container'>
                <h1 className="edit-component-header"> Modifier Examen</h1>
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
                            <div style={{ display: 'flex' }}>
                                <div className="modifier-enonce">
                                    <textarea value={this.state.content} style={{ width: '100%' }} name='content' placeholder='Enoncé' onChange={this.handleChange} />
                                </div>
                                <div className="modifier-test">
                                    <h4 style={{ color: 'black' }}>Tests</h4>
                                    <div className='test-container'>
                                        <div className='tests'>
                                            <input type="text" className="form-control inputdata" placeholder="Données (sous format a,b,...)" value={this.state.inputData} name='inputData' onChange={this.handleInputChange} />
                                            <input type="text" className="form-control outputdata" placeholder="Résultat attendu" name='outputData' value={this.state.outputData} onChange={this.handleChange} />
                                            <div className='add-test-buttons'>
                                                <button type="button" className="btn btn-outline-primary add-test-btn btn-sm" onClick={this.addTest}>Ajouter</button>
                                                <button type="button" className="btn btn-outline-success btn-sm" data-toggle="modal" data-target="#edit-modal">Afficher</button>
                                                {this.state.exercices[this.state.activeIndex]&&<EditModalTest testTab = {this.state.exercices[this.state.activeIndex].testTab} />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                    <div className='add-component-duree-matiere'>
                        <div className='duree-date' >
                            <input type="text" className="form-control ajouter-duree-input" id="staticEmail" placeholder="Durée (minutes)" name='duree' value={this.state.duree} onChange={this.handleChange} />
                            <input type='datetime-local' className='form-control' name='fullDate' value={this.state.fullDate} onChange={this.handleChange} />
                        </div>
                        <div className='matiere-classe'>
                            <select className="form-control matiere" name='matiere' value={this.state.matiere}onChange={this.handleChange}>
                                <option selected disabled >Matière </option>
                                <option>Java Script</option>
                                <option>PHP</option>
                                <option>C++</option>
                            </select>

                            <select className="form-control classe" name='classe' value={this.state.classe} onChange={this.handleChange}>
                                <option selected disabled>Classe</option>
                                <option>LFI1</option>
                                <option>LFI2</option>
                                <option>LFI3 </option>
                            </select>
                        </div>
                    </div>

                <div className='edit-component-buttons' >
                   
                        <button type="button" class="btn btn-primary edit-button" onClick={this.editExamen}>Modifier Examen</button>
                        <Link to={`/enseignant/${this.props.user._id}`}>  
                            <button type="button" class="btn btn-secondary edit-button">Ignorer</button>
                         </Link>
                   
                </div>
            </div>
        )
    }
}

const mapStateToProp = state => {
    
    return {
        user: state.user,
        testTab:state.tests
    }
}

const ModifierContainer = connect(mapStateToProp)(Modifier)

export default ModifierContainer