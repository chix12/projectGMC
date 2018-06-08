import React from 'react'
import './EspaceEtudiantMain.css'
import ModalComponent from './ModalComponent'
import axios from 'axios'
import TimerExp from './TimerExp/TimerExp'
import './TimerExp/TimerExp.css'
//import Editeur from './Editeur'
import {connect} from 'react-redux'
import MonacoEditor from 'react-monaco-editor'




class EspaceEtudiantMain extends React.Component{

    constructor(props){
        super(props)      
        this.state = {
           
            etudiant : {},
            date : new Date(),
            exam:{},
            testResult:[] ,
            exercices:[],
            codeList:[],
            activeIndex:0,
            code: JSON.parse(localStorage.getItem('codeList'))[0].code
           
          
        }
    }  

    componentDidMount () {
        axios.get('/etudiant/'+this.props.match.params.id).then(
            res => {
                this.setState({
                    etudiant: res.data,
                })
                
               let d=JSON.stringify(this.getDate(this.state.date))
              
               
            //axios.get('/exam/'+this.state.etudiant.classe+"/"+d).then(
            axios.get(`/exam/LFI2/{"annee":"2018","mois":"06","jour":"07","heure":"10","minutes":"00"}`).then(
                res => {
                    window.localStorage.setItem('exam',JSON.stringify(res.data))
                    this.setState({
                        exam: JSON.parse(localStorage.getItem('exam')),
                        exercices:JSON.parse(localStorage.getItem('exam')).exercices,
                        content:JSON.parse(localStorage.getItem('exam')).exercices[0].content,
                        codeList:JSON.parse(localStorage.getItem('exam')).exercices.map((el,i)=>{return {titre:'Exercice '+Number(i+1),code:''}})
                        
                    })
 
                }
            )
        }
    )
    
}



    getDate=(date)=>{
            
        let newDateFormat = String('Y' + this.state.date.getFullYear()) + 'M' + String((this.state.date.getMonth()) + 1).padStart(2, 0) + 'D' + String(this.state.date.getDate()).padStart(2, 0)
        let newTimeFormat = String(this.state.date.getHours()).padStart(2, 0) + 'M' + String(this.state.date.getMinutes()).padStart(2, 0)
        //let currentTime = newDateFormat + 'T' + newTimeFormat

        let dateObj={
            annee: String(this.state.date.getFullYear()),
            mois:String(this.state.date.getMonth() + 1).padStart(2, 0),
            jour:String(this.state.date.getDate()).padStart(2, 0),
            heure:String(this.state.date.getHours()).padStart(2, 0) ,
            minutes:String(this.state.date.getMinutes()).padStart(2, 0)
        }
        return dateObj
    }

    getParams=(code)=>{
        let ouvrante = code.indexOf('=')+ 1
        let fermante = code.indexOf('=>')

        let paramsString = String(code.slice(ouvrante,fermante))
        if (paramsString.includes('('))
            {
                let parentheseOuvrante = paramsString.indexOf('(') + 1
                let parentheseFermante = paramsString.indexOf(')')
                let paramsTab = paramsString.slice(parentheseOuvrante, parentheseFermante)
                                            .split(',').map(el => el.trim())
               
                return paramsTab
            }
        else 
           
            return Array.from(paramsString.trim())
    }

    getCode = (code) => {
        let ouvrante = code.indexOf('{') + 1
        let fermante = code.lastIndexOf('}')
        let codeTab = code.slice(ouvrante, fermante).trim().split('')
       
        return codeTab.filter(el => el !== "\t").map(el => el==='\n' ? ";" : el).join('')
    }

    executerTests = () => {
        const localStorage = window.localStorage
        const storedCode = localStorage.getItem('code')
        const code = this.getCode(storedCode)
        
        const params = this.getParams(storedCode)
        
        const funct = new Function (...params, code)
       
        this.setState({testResult:[]})
       
        this.state.exam.exercices[this.state.activeIndex].testTab.map(el=>{
            axios.post('https://api.judge0.com/submissions?wait=true', {
                source_code: `console.log(${JSON.stringify(funct(...el.input))})`,
                language_id: 29,    
                expected_output: el.expectedOutput
            })
            .then(res => {    
                this.setState({
                    testResult: this.state.testResult.concat({
                        input: el.input,
                        expectedOutput: el.expectedOutput,
                        output: res.data.stdout,
                        description:res.data.status.description
                    }),  
                    
                })
                
            })
            .catch(e=>console.log(e))
        })
    }



    addCodeEtudiant=()=>{
     
        let obj={title:this.state.exam.title,
            content:this.state.exam.content,
            duree:this.state.exam.duree,
            classe:this.state.exam.classe,
            matiere:this.state.exam.matiere,
            idEnseignant:this.state.exam.idEnseignant,
            date:this.state.exam.date,
            fullDate:this.state.exam.fullDate,
           // answers:answers
        }
        
        
        axios.put(`/examen/${this.state.exam._id}`,obj)
          .catch((error) =>{
            console.log(error);
          })
    }


    onClickExerciceItem=(i)=>{
       
        this.setState({
            activeIndex:i,
            content:this.state.exercices[i]&&this.state.exercices[i].content,
            code:JSON.parse(localStorage.getItem('codeList'))[i].code
           

        })
    }


    updateCode= (newCode)=> {
        const localStorage = window.localStorage

        let codeTab=this.state.codeList.map((el,i)=>{
            if(i===this.state.activeIndex){
                return Object.assign(this.state.codeList[this.state.activeIndex],{code:newCode})
            }
            else return el
        })

		this.setState({
            code: newCode,
            codeList:codeTab
        });
        
        localStorage.setItem('codeList', JSON.stringify(codeTab))
        localStorage.setItem('code', newCode)
    }

    render(){
     console.log(this.state.codeList)
     
        return (   
        <div className='etudiant-main' >
          
            {this.state.exam &&
            <div className='etudiant-main-content'>
            <ul className="nav nav-tabs">
                {this.state.exercices&&this.state.exercices.map((el,i)=>{
                    return (
                    <li className="nav-item" style={{color:this.state.activeIndex===i?"#007bff":""}} onClick={()=>this.onClickExerciceItem(i)}>
                        <span className="nav-link" >{el.titre}</span>
                    </li> 
                    )
                })}
                             
            </ul>

            {this.state.exam.duree && <TimerExp duree={this.state.exam.duree}/>}


                <div className='etudiant-probleme-test-code'>
                <div className='etudiant-probleme-test'>
                    <div className='etudiant-probleme'>
                        <h3> Enoncé </h3>{this.state.content}
                    </div>

                    <div className='etudiant-test'>
                        <h3>Test </h3>

                        {this.state.testResult.map(el=>{
                            return (
                                <div>
                                    
                                    {el.description}: 
                                    Input: ({[...el.input].join()})
                                    Expected: {el.expectedOutput} instead got: {el.output}
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                <div className='etudiant-code'>
                    <h3> Code </h3>
                    <div >
                        <MonacoEditor
                            width="100%"
                            height="500"
                            language="javascript"
                            value = {this.state.code}
                            options={{selectOnLineNumbers: true}}
                            onChange={this.updateCode}
                            editorDidMount={this.editorDidMount}
                        />

                    </div>  
                </div>

            </div> 

            <div className='etudiant-buttons'>  
                <button type="button" className="btn btn-outline-primary btn-executer" onClick={this.executerTests}>
                    Exécuter les tests
                </button>
                {//<button type="button" className="btn btn-outline-success"onClick={this.addCodeEtudiant}>Valider</button>
                }
                        <button type="button" className="btn btn-outline-success" onClick={this.addCodeEtudiant}  data-toggle="modal" data-target="#exampleModal">Valider</button>
                    
                <ModalComponent nbrTest={this.state.exam.test}/>
            
            </div>
            </div>}

        </div>
      )
    }
}



export default EspaceEtudiantMain
    