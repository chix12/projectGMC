import React from 'react'
import './EspaceEtudiantMain.css'
import ModalComponent from './ModalComponent'
import axios from 'axios'
import Timer from './Timer'

class EspaceEtudiantMain extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            exams :[] , 
            etudiant : {},
            date : new Date(),
            duree : 0,
        }
    }

    componentDidMount () {
        axios.get('/exams').then(
            res => {
                this.setState({
                    exams : res.data
                })
            }
        )
      
        axios.get('/etudiant/'+this.props.match.params.id).then(
            res => {
                this.setState({
                    etudiant : res.data
                })
            }
        )
    }
   
    render(){


        let newDateFormat = String(this.state.date.getFullYear()) + '-' + String((this.state.date.getMonth())+1).padStart(2,0) + '-' + String(this.state.date.getDate()).padStart(2,0)
        let newTimeFormat = String(this.state.date.getHours()).padStart(2, 0) + ':' + String(this.state.date.getMinutes()).padStart(2, 0) 
        let currentTime = newDateFormat + 'T' + newTimeFormat

        return (
        <div className='etudiant-main' >
        <h3 style={{textAlign:'center'}}>{this.state.etudiant.prenom} {this.state.etudiant.nom}</h3>

          {this.state.exams.filter(el=>el.classe === this.state.etudiant.classe && el.date !== currentTime)
                .map(el=>{return (

            <div className='etudiant-main-content'>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">{el.title}</a>
                    </li>                    
                </ul>
                        <Timer minutes = {el.duree} />          

                    <div className='etudiant-probleme-test-code'>
                    <div className='etudiant-probleme-test'>
                        <div className='etudiant-probleme'>

                            <h3>Enoncé </h3>{el.content}
                        </div>

                        <div className='etudiant-test'>

                            <h3>Test </h3>
                        </div>
                    </div>

                    <div className='etudiant-code'>
                        <h3>Code </h3>
                        <code contenteditable="true" >//write your code here</code>
                    </div>

                </div> 
               
                <div className='etudiant-buttons'>  
                    <button type="button" class="btn btn-outline-primary btn-executer">Exécuter les tests</button>
                    <button type="button" class="btn btn-outline-success"  data-toggle="modal" data-target="#exampleModal">Valider</button>

                  <ModalComponent/> 
                </div>
               
            </div>

        )})
                
    }


</div>








      )
    }
}

export default EspaceEtudiantMain
    