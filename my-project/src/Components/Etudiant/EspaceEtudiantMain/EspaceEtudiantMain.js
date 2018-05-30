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
        this.state = {
            exams :[] , 
            etudiant : {},
            date : new Date(),
            duree : 0,
            exam:{},
            
            
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
        let ouvrante=code.indexOf('(')+1

        let fermante =code.indexOf(')')

        let tabParams=code.slice(ouvrante,fermante).split(',').map(el=>el.trim())
        return tabParams

    }


    getCode=(code)=>{
        let ouvrante=code.indexOf('{')+1

        let fermante =code.lastIndexOf('}')

        return code.slice(ouvrante,fermante).trim()
        
    }

    test=()=>{
        const localStorage = window.localStorage
        const storedCode=localStorage.getItem('code')
        const code =this.getCode(storedCode)
        const params=this.getParams(storedCode)
        console.log(code, params)
        let func = new Function('a', 'b', code)

      /*  axios.post('https://api.judge0.com/submissions?wait=true', {
        source_code: localStorage,
        language_id: languageId,
        stdin: tc.input,
        expected_output: tc.output
      }).then(res => {
        let stdout = res.data.stdout
        let accepted = res.data.status.description
        // console.log('stdout', stdout);
        this.setState({
          result: this.state.result.concat({
            stdin: tc.input,
            expected_output: tc.output,
            stdout,
            accepted
          }),
          accepted: this.state.accepted && (accepted === 'Accepted')
        })
      })*/
    }








    render(){
      let codeString=localStorage.getItem('code')
      console.log('code',codeString.slice(codeString.indexOf('(')),codeString.slice(codeString.indexOf(')')))

      //let params=codeString.slice(code)
        return (   
        <div className='etudiant-main' >
           {/* <h3 style={{textAlign:'center'}}>{this.state.etudiant.prenom} {this.state.etudiant.nom}</h3>*/}


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

                        <h3>Enoncé </h3>{this.state.exam.content}
                    </div>

                    <div className='etudiant-test'>

                        <h3>Test </h3>



                    </div>
                </div>
                
                <div className='etudiant-code'>
                    <h3>Code </h3>

                    {/*<CodeMirror className='code-mirror'  
                            value={`
                                let x=12
                                console.log(x)

                                `}
                            options={{mode:'jsx',lineNumbers:true,tabSize:2}} 
                    
            />*/}

                    <div >
                        <Editeur/>
                    </div>


  
                </div>

            </div> 

            <div className='etudiant-buttons'>  
                <button type="button"  onClick={this.test} className="btn btn-outline-primary btn-executer">Exécuter les tests</button>
                   
                <button type="button" className="btn btn-outline-success"  data-toggle="modal" data-target="#exampleModal" >Valider</button>
                    
                <ModalComponent/>
            
            </div>











            </div>}

        </div>








      )
    }
}

export default EspaceEtudiantMain
    