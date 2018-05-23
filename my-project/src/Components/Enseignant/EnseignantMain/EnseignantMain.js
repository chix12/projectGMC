import React from 'react'
import './EnseignantMain.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

class EnseignantMain extends React.Component {

    constructor(props){     
        super(props)
        this.state={
            examList:[],
           
        }
    }


    componentDidMount(){
        axios.get('/exams').then(
            res =>{
                this.setState({
                    examList:res.data
                })
            }
        )
    
    
        }
    render (){
        return (
            <div className="enseignant-main-container">
                <div className = "Filtres" >
                  <select class="custom-select" id="inputGroupSelect01">
                     <option selected>Matières</option>
                     <option value="1">JavaScript</option>
                     <option value="2">PHP</option>
                     <option value="3">C++</option>
                   </select>
                     <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Classes</option>
                        <option value="1">LFI1</option>
                        <option value="2">LFI2</option>
                        <option value="3">LFI3</option>
                     </select>
                </div>

                <div className="exams-card">
                    <div className="enseignant-button">
                        <Link to='/ajouter_examen'>
                            <button type="button" class="enseignant-add-button">+</button>
                        </Link>
                        
                    </div>

                    {this.state.examList.map((el,i)=><div key={el._id}>

                    <div class="card text-center">
                        <div class="card-header">
                            Examen {i+1}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{el.title}</h5>
                            <p class="card-text">{el.content}</p>
                            <input type='button' class="btn btn-primary" value="Accéder" />
                        </div>
                        <div class="card-footer text-muted">
                            Durée : {el.duree} minutes
                        </div>
                    </div>



                    </div>)}
                    

                </div>
                
            </div>
        )
    }
}

export default EnseignantMain;