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
          classe:'',
          date:'',
          idEnseignant:this.props.match.params.id.slice(0,-1),
          fullDate:'',
          isAdded:false,
          inputData:[],
          outputData:"",
          testTab : [] ,
          answers:[] 
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
        //return ('Y' + myDate[0] + 'M' + myDate[1] + 'D' + myDate[2] + 'T' + heure[0] + 'M' + heure [1])

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

     handleInputChange=(e)=>{
        let inputString = e.target.value
        if (inputString.length>0)
       {
            let outputTab = inputString.split(',')
            for (let i=0;i<outputTab.length;i++){
                if (outputTab[i].toLowerCase().trim()==='true') 
                    outputTab[i]= true
                else if ((outputTab[i].toLowerCase().trim() === 'false'))
                    outputTab[i] = false
                else if (!isNaN(parseInt(outputTab[i])))
                    outputTab[i] = Number(outputTab[i])
                else 
                    outputTab[i] = String(outputTab[i])
        }
            console.log(outputTab)
            this.setState({
                inputData: outputTab
            }) 
        }
     }

     addTest=()=>{

        
         let Test = {
             input : this.state.inputData,
             expectedOutput : this.state.outputData
         }
         this.setState({
             testTab : this.state.testTab.concat(Test),
             inputData : [],
             outputData : ""
         })

     }
    render() {
       
       return(
            this.state.isAdded?<Redirect to={`/enseignant/${this.state.idEnseignant}`}/>:
            <div className='add-component-container'>
                <h1 className="add-component-header"> Ajouter Examen</h1>
                <div className='add-component-main'>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="">Enoncé</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Tests</a>
                        </li>
                    </ul>
                    <input type='text' placeholder='Titre' className='add-examen-title' name='title' onChange={this.handleChange}/>
                  <div style={{display:'flex'}}> 
                        <div className="ajouter-enonce">
                                <textarea style={{width:'100%'}}name='content'  placeholder='Enoncé'onChange={this.handleChange}/>
                        </div>

                        <div className="ajouter-test">
                            <h4>Test</h4>
                            <div className = 'test-container'>
                                <div className='tests'>
                                    <input type="text" className="form-control inputdata" placeholder="Données (sous format a,b,...)" value={this.state.inputData} name='inputData' onChange={this.handleInputChange} />
                                    <input type="text" className="form-control outputdata" placeholder="Résultat attendu" name='outputData' value={this.state.outputData} onChange={this.handleChange} />
                                    <div className='add-test-buttons'>
                                        <button type="button" className="btn btn-outline-primary add-test-btn btn-sm" onClick={this.addTest}>Ajouter</button>
                                        <button type="button" className="btn btn-outline-success btn-sm" onClick={this.addTest}>Afficher</button>
                                 
                                    </div>
                                </div>
                               
                            </div> 
                        </div>
                   </div>

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

export default Ajouter