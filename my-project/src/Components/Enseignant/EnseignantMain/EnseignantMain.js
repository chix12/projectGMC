import React from 'react'
import './EnseignantMain.css'
import { Link} from 'react-router-dom'
import axios from 'axios'

class EnseignantMain extends React.Component {

    constructor(props){     
        super(props)
        this.state={
            examList:[],
            matiere:'',
            title:'',
            classe:'',
            isDeleted:false,
            enseignant:{}
           
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

        axios.get('/enseignant/'+this.props.match.params.id).then(
            res =>{
                this.setState({
                    enseignant:res.data
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
        
        axios.delete("/examen/"+id).catch(err=>console.log(err))
        this.setState({isDeleted:true})
    }

    render (){
        
        return (
            
            <div className="enseignant-main-container">
                <div className = "filters" >
                    <h4>Recherche </h4>
                    <input type="text"  className="form-control enseignant-input-search" placeholder="Titre" name='title' onChange={this.handleChange} autoComplete='off'/>
                  
                  <select className="custom-select filter-matiere"  name='matiere'onChange={this.handleChange}>
                        <option selected disabled>Matières</option>
                        <option value=''>Tous</option>
                        <option>Java Script</option>
                        <option>PHP</option>
                        <option>C++</option>
                   </select>
                     <select className="custom-select" name='classe'onChange={this.handleChange}>
                        <option selected disabled>Classes</option>
                            <option>LFI1</option>
                            <option>LFI2</option>
                            <option>LFI3 </option>
                        
                     </select>
                </div>

               
                <div className="exams">
                    <div className="enseignant-button">
                        <Link to={`/ajouter_examen/${this.state.enseignant._id}}`}>
                            <button type="button" className="enseignant-add-button">+</button>
                        </Link>
                        
                    </div>

                    {this.state.examList
                    .filter(el=>el.matiere.includes(this.state.matiere) && 
                    el.classe.includes(this.state.classe) && 
                    el.title.toUpperCase().includes(this.state.title.toUpperCase())&&
                    el.idEnseignant===this.state.enseignant._id
                    )
                    .map(el=>{
                    return (
                        <div key={el._id} className='examen-card'>
                            <div className="card text-center">
                                <div className="card-header">
                                    {el.matiere}
                                </div>
                                <div className="card-body"> 
                                    <h5 className="card-title">{el.title}</h5>
                                    <Link to={'/delete_exam/'+this.state.enseignant._id}><input type='button'value='X' style={{background:'none',border:'none',color:'gray', position:'absolute', top:60,right:20}} 
                                    onClick={()=>this.deleteMatiere(el._id)}/></Link>
                                
                                    <p className="card-text">{el.content}</p>
                                    <Link to={`/modifier_examen/${el._id}`}>
                                        <input type='button' className="btn btn-primary" value="Accéder" />
                                    </Link>
                                </div>
                                <div className="card-footer text-muted">
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