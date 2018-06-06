import React from 'react'
import './Ajouter.css'
import {connect} from 'react-redux'
import axios from 'axios'

class AjouterExercice extends React.Component {
    constructor(props){
        super(props)
        this.state={ 
            titre:'exercie',
            //points:0 ,
           
            content:this.props.exerciceProp?this.props.exerciceProp.content:'',
            inputData:[],
            outputData:"",
            testTab : [] ,
            //answers:[],
            exerciceObj:{}

            
        }
    }

   

    componentDidUpdate(){
        
        this.props.updateExercice(this.state.exerciceObj)
       
        
    }
   


   
    addTest=()=>{
        let test = {
            input : this.state.inputData,
            expectedOutput : this.state.outputData
        }
        this.setState({
            testTab : this.state.testTab.concat(test),
            inputData : [],
            outputData : "",
            exerciceObj:Object.assign(this.state.exerciceObj,{testTab: this.state.testTab.concat(test)}),

        })

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            exerciceObj:Object.assign(this.state.exerciceObj,e.target.name==='content'&&{[e.target.name]: e.target.value})
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
            
            this.setState({
                
                inputData: outputTab
            }) 
        }
     }

    saveExercice = () => {
<<<<<<< HEAD
        let exerciceObj = {
            titre: this.state.titre,
            //points:0 ,
            //idExamen: this.props.idExamen,
            content: this.state.content,
            //inputData: this.state.inputData,
            //outputData: this.state.outputData,
            testTab: this.state.testTab,
            //answers: this.state.answers,
        }
        /*axios.post('/add_exercice', exerciceObj).catch((error) => {
            console.log(error);
        })*/
        this.props.AddExercice(exerciceObj);

        //console.log(exerciceObj);
=======
>>>>>>> e6fc9b06fcf4635d891badf40932aec37e0d9942
        

       if(!JSON.parse(localStorage.getItem('exercicetab'))){
           let tab=[]
           tab.push(Object.assign({titre:'Exercice '+Number(tab.length+1)},this.state.exerciceObj))
           localStorage.setItem('exercicetab',JSON.stringify(tab))
       
       }
       else {
            
            let tab=JSON.parse(localStorage.getItem('exercicetab'))
            tab.push(Object.assign({titre:'Exercice '+Number(tab.length+1)},this.state.exerciceObj))
            localStorage.setItem('exercicetab',JSON.stringify(tab))
       }
            
    }


    render(){
       console.log(this.props.exerciceProp)
        return (
        <div style={{display:'flex'}}> 
            
            <div className="ajouter-enonce">
                    <textarea style={{width:'100%'}}name='content'  placeholder='Enoncé'onChange={this.handleChange} value={this.state.content}/>
                    <button type="button" className="btn btn-outline-secondary add-test-btn btn-sm" onClick={()=>this.saveExercice()}>Save</button>
                      
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
=======
const mapStateToProp = state => {
    
    return {
        exercice: state.exercice
    }
}
>>>>>>> e6fc9b06fcf4635d891badf40932aec37e0d9942


const mapDispatchToProps = dispatch => {
    return {
        updateExercice: (exercice) => {
            dispatch({
                type: "UPDATE_EXERCICE",
                exercice
            })
        }
    }
}

const AjouterExerciceContainer = connect(null, mapDispatchToProps)(AjouterExercice)

export default AjouterExerciceContainer
