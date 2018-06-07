import React from 'react'
import './Ajouter.css'
import {connect} from 'react-redux'

class AjouterExercice extends React.Component {
    constructor(props){
        super(props)
        this.state={ 
            titre:'',
           
            content:'',
            
            inputData:[],
            outputData:"",
            testTab : [] ,
            
            exerciceObj:{},



            exerciceTab:['Exercice 1']   ,
            exerciceArray:[{titre:"exercice 1"}],
            activeIndex:0
            
        }
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

            exerciceArray:this.state.exerciceArray.map((el,i)=>{
               
                if(i===this.state.activeIndex){
                    
                    return Object.assign(this.state.exerciceArray[this.state.activeIndex],{testTab: this.state.testTab.concat(test)})
                }
                else return el
            })

        })

    }

    handleChange = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value,
            exerciceObj:Object.assign(this.state.exerciceObj,e.target.name==='content'&&{[e.target.name]: e.target.value}),
           
            exerciceArray:this.state.exerciceArray.map((el,i)=>{
               
                if(i===this.state.activeIndex){
                    
                    return Object.assign(this.state.exerciceArray[this.state.activeIndex],e.target.name==='content'&&{[e.target.name]: e.target.value})
                }
                else return el
            })
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



    addExercice=()=>{
        
        this.setState({
            exerciceTab:this.state.exerciceTab.concat('Exercice '+Number(this.state.exerciceTab.length+1)),
            exerciceArray:this.state.exerciceArray.concat(Object.assign({titre:'Exercice '+Number(this.state.exerciceArray.length+1)})),
            activeIndex:this.state.activeIndex+1,
            content:''
        })

     }


     onClickExerciceItem=(i)=>{
         
        this.setState({
            activeIndex:i,
            content:this.state.exerciceArray[i]?this.state.exerciceArray[i].content:''
        })
     }
    render(){
   
        return (
        <div>
            <ul className="nav nav-tabs">
                {this.state.exerciceTab.map((el,i)=> ( 
                    <li className="nav-item" key={i} onClick={()=>this.onClickExerciceItem(i)}>
                        <span className="nav-link" style={{color:this.state.activeIndex===i?"#007bff":""}}>{el}</span>
                    </li>  
                ))}  
                    <li className="nav-item" onClick={this.addExercice}>
                        <span className="nav-link nav-tab-add-btn" >+</span>
                    </li>
                        
            </ul>
            <div style={{display:'flex'}}> 
                
                <div className="ajouter-enonce">
                        <textarea value={this.state.content} style={{width:'100%'}}name='content'  placeholder='Enoncé'onChange={this.handleChange} />
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
        </div>
        )}
}

const mapStateToProp = state => {
    
    return {
        exercice: state.exercice
    }
}


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

const AjouterExerciceContainer = connect(mapStateToProp, mapDispatchToProps)(AjouterExercice)

export default AjouterExerciceContainer
