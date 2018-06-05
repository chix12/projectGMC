import React from 'react'
import './Ajouter.css'
import {connect} from 'react-redux'

class AjouterExercice extends React.Component {
    constructor(props){
        super(props)
        this.state={ 
            titre:'exercie',
<<<<<<< HEAD
            //points:0 ,
=======
            points:0 ,
>>>>>>> ffca67069468f6c1b6a369402df2dc5be60438cc
            idExamen:'' , 
            content:'',
            inputData:[],
            outputData:"",
            testTab : [] ,
<<<<<<< HEAD
            //answers:[],
        }
    }

=======
          
        }
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

    

>>>>>>> ffca67069468f6c1b6a369402df2dc5be60438cc
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

<<<<<<< HEAD
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    saveExercice = () => {
        let exerciceObj = {
            titre: this.state.titre,
            //points:0 ,
            idExamen: this.props.idExamen,
            content: this.state.content,
            inputData: this.state.inputData,
            outputData: this.state.outputData,
            testTab: this.state.testTab,
            //answers: this.state.answers,
        }

        console.log(exerciceObj);
        
    }


=======
    saveExercice=()=>{


    }

>>>>>>> ffca67069468f6c1b6a369402df2dc5be60438cc
    render(){
        
        return (
            <div style={{display:'flex'}}> 
            
            <div className="ajouter-enonce">
<<<<<<< HEAD
                    <textarea style={{width:'100%'}}name='content' placeholder='Enoncé'onChange={this.handleChange}/>
=======
                    <textarea style={{width:'100%'}}name='content'  placeholder='Enoncé'onChange={this.handleChange}/>
            
            
                    <button type="button" className="btn btn-outline-secondary add-test-btn btn-sm" onClick={()=>this.saveExercice()}>Save</button>
                      
>>>>>>> ffca67069468f6c1b6a369402df2dc5be60438cc
            </div>

            <div className="ajouter-test">
                <h4 style={{color:'black'}}>Test</h4>
                <div className = 'test-container'>
                    <div className='tests'>
                        <input type="text" className="form-control inputdata" placeholder="Données (sous format a,b,...)" value={this.state.inputData} name='inputData' onChange={this.handleInputChange} />
                        <input type="text" className="form-control outputdata" placeholder="Résultat attendu" name='outputData' value={this.state.outputData} onChange={this.handleChange} />
                        <div className='add-test-buttons'>
                            <button type="button" className="btn btn-outline-primary add-test-btn btn-sm" onClick={this.addTest}>Ajouter</button>
                            <button type="button" className="btn btn-outline-success btn-sm" >Afficher</button>
                    
                        </div>
                    </div>
                
                </div> 
            </div>
            </div>
        )}
}

<<<<<<< HEAD
const mapStateToProp = state => {
    if (!state.exercice) return { exercice: {} }
    return {
        exercice: state.exercice
    }
}


const mapDispatchToProps = dispatch => {
    return {
        AddExercice: (exercice) => {
            dispatch({
                type: "SET_EXERCICE",
                exercice
            })
        }
    }
}

const AjouterExerciceContainer = connect(mapStateToProp, mapDispatchToProps)(AjouterExercice)

export default AjouterExerciceContainer
=======
const mapDispatchToProps = dispatch => {
    
    return {
      AddExercice: (exercice) => {
        dispatch({
          type: "SET_EXERCICE",
          exercice
        })
      }
    }
  }


  const AjouterExerciceContainer = connect(null, mapDispatchToProps)(AjouterExercice);


export default AjouterExercice
>>>>>>> ffca67069468f6c1b6a369402df2dc5be60438cc
