import React from 'react'
import './EspaceEtudiantMain.css'
import ModalComponent from './ModalComponent'
import axios from 'axios'
import TimerExp from './TimerExp/TimerExp'
import './TimerExp/TimerExp.css'
import Editeur from './Editeur'


class EspaceEtudiantMain extends React.Component{

    constructor(props){
        super(props)
        this.testArray=[
            {
                input:[2,5],
                expectedOutput:7,
            },
            {
                input:[9,1],
                expectedOutput:10,
            },
            {
                input:[0,23],
                expectedOutput:23,
            }
        ]
        this.state = {
            exams :[] , 
            etudiant : {},
            date : new Date(),
            duree : 0,
            exam:{},
            result:[]           
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
                axios.get(`/exam/LFI2/{"annee":"2018","mois":"05","jour":"28","heure":"01","minutes":"57"}`).then(
                res => {
                    this.setState({
                        exam: res.data,
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
        console.log('funct', codeTab.filter(el => el != "\n").join(''))
        return codeTab.filter(el => (el != "\n" && (el != "\t"))).join('')
    }

    executerTests = () => {
        const localStorage = window.localStorage
        const storedCode = localStorage.getItem('code')
        const code = this.getCode(storedCode)
        console.log(code)
        const params = this.getParams(storedCode)
        const funct = new Function (...params, code)
        
        this.setState({result:[]})
       
        this.testArray.map(el=>{


            axios.post('https://api.judge0.com/submissions?wait=true', {
                source_code: `console.log(${funct(...el.input)})`,
                language_id: 29,    
                expected_output: el.expectedOutput
            })
            .then(res => {
               
    
                this.setState({
                    result: this.state.result.concat({
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
    render(){
     
        return (   
        <div className='etudiant-main' >
          
            {this.state.exam &&
            <div className='etudiant-main-content'>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="">{this.state.exam.title}</a>
                </li>                    
            </ul>

            {this.state.exam.duree && <TimerExp duree={this.state.exam.duree}/>}


                <div className='etudiant-probleme-test-code'>
                <div className='etudiant-probleme-test'>
                    <div className='etudiant-probleme'>
                        <h3> Enoncé </h3>{this.state.exam.content}
                    </div>

                    <div className='etudiant-test'>
                        <h3>Test </h3>

                        {this.state.result.map(el=>{
                            return (
                                <div>
                                    {el.description}: 
                                    Input: ({el.input[0]},{el.input[1]})
                                    Expected: {el.expectedOutput} instead got: {el.output}
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                <div className='etudiant-code'>
                    <h3> Code </h3>
                    <div >
                        <Editeur/>
                    </div>  
                </div>

            </div> 

            <div className='etudiant-buttons'>  
                <button type="button" className="btn btn-outline-primary btn-executer" onClick={this.executerTests}>
                    Exécuter les tests
                </button>
                <button type="button" className="btn btn-outline-success"  data-toggle="modal" data-target="#exampleModal" >Valider</button>
                    
                <ModalComponent/>
            
            </div>
            </div>}

        </div>








      )
    }
}

export default EspaceEtudiantMain
    