import React from 'react'
import './Ajouter.css'

class AjouterExercice extends React.Component {
    constructor(props){
        super(props)
        this.state={ 
            titre:'exercie1',
            points:0 ,
            idExamen:'' , 
            content:'',
            inputData:[],
            outputData:"",
            testTab : [] ,
            answers:[],
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

    render(){
        return (
            <div style={{display:'flex'}}> 
            <div className="ajouter-enonce">
                    <textarea style={{width:'100%'}}name='content'  placeholder='Enoncé'onChange={this.handleChange}/>
            </div>

            <div className="ajouter-test">
                <h4 style={{color:'black'}}>Test</h4>
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
        )}
}

export default AjouterExercice