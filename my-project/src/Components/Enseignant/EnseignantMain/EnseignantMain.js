import React from 'react'
import './EnseignantMain.css'
import { Link ,Redirect} from 'react-router-dom'
import axios from 'axios'

class EnseignantMain extends React.Component {

    constructor(props){     
        super(props)
        this.state={
            examList:[],
            matiere:'',
            title:'',
            isDeleted:false
           
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

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    deleteMatiere=(id)=>{
        console.log(id)
        axios.delete("/examen/"+id).catch(err=>console.log(err))
        this.setState({isDeleted:true})
    }

    render (){
        
        return (
            
            <div className="enseignant-main-container">
                <div className = "filters" >
                    <h4>Recherche </h4>
                    <input type="text"  class="form-control enseignant-input-search" placeholder="Titre" name='title' onChange={this.handleChange} autoComplete='off'/>
                  
                  <select class="custom-select filter-matiere"  name='matiere'onChange={this.handleChange}>
                        <option selected disabled>Matières</option>
                        <option value=''>Tous</option>
                        <option>Java Script</option>
                        <option>PHP</option>
                        <option>C++</option>
                   </select>
                     <select class="custom-select" >
                        <option selected disabled>Classes</option>
                        
                     </select>
                </div>

                <div className="exams">
                    <div className="enseignant-button">
                        <Link to='/ajouter_examen'>
                            <button type="button" class="enseignant-add-button">+</button>
                        </Link>
                        
                    </div>

                    {this.state.examList
                    .filter(el=>el.matiere.includes(this.state.matiere)&&el.title.includes(this.state.title))
                    
                    .map(el=>{
                    return (
                        
                        <div key={el._id} className='examen-card'>
                            <div class="card text-center">
                                <div class="card-header">
                                    {el.matiere}
                                </div>
                                <div class="card-body">
                                    
                                        <h5 class="card-title">{el.title}</h5>
                                        <Link to='/delete_exam'><input type='button'value='X' style={{background:'none',border:'none',color:'gray', position:'absolute', top:60,right:20}} 
                                        onClick={()=>this.deleteMatiere(el._id)}/></Link>
                                    
                                    <p class="card-text">{el.content}</p>
                                    <Link to={`/modifier_examen/${el._id}`}>
                                        <input type='button' class="btn btn-primary" value="Accéder" />
                                    </Link>
                                </div>
                                <div class="card-footer text-muted">
                                    Durée : {el.duree} minutes
                                </div>
                            </div>
                        </div>
                    )}
                )}
                    

                </div>
                
            </div>
        )
    }
}

export default EnseignantMain;