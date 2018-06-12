import React from 'react'
//import './Ajouter.css'
import {connect} from 'react-redux'
import ModalTest from './ModalTest'

class AjouterExercice extends React.Component {
    constructor(props){
        super(props)
        this.state={ 
            content:'',
            inputData:[],
            outputData:"",
            testTab : [] ,
            exerciceArray:[{titre:"Exercice 1"}],
            activeIndex:0,
            
            
        }
    }

    componentDidUpdate(){
        this.props.setExerciceArray(this.state.exerciceArray)
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
        let inputTab=[]
        if (inputString.length>0)
       {
           if(
               (inputString.includes('[')&&(inputString.includes(']')))
               ||
               (inputString.includes('{')&&(inputString.includes('}')))
            )  
                {
                    //inputTab=JSON.parse(inputString)

                    inputTab = inputString
                    let tab=inputString.split('],[')


                    if(tab.length>1){
                        tab[0]=tab[0]+"]"
                        tab[tab.length-1]="["+tab[tab.length-1]
    
                    

                   
                    for(let i=1;i<tab.length-1;i++){
                        
                        tab[i]="["+tab[i]+"]"
                    }
                }

                  

                  
                    console.log('tab',tab)
                    

                }

           
            else{
            inputTab = inputString.split(',')
            //console.log(inputTab)
            for (let i=0;i<inputTab.length;i++){
                if (inputTab[i].toLowerCase().trim()==='true') 
                    inputTab[i]= true
                else if ((inputTab[i].toLowerCase().trim() === 'false'))
                    inputTab[i] = false


                else if (inputTab[i].toLowerCase().includes('[')&&inputTab[i].toLowerCase().includes(']')) {
                    
                    /*console.log(inputTab[i].slice(inputTab[i].indexOf('['),inputTab[i].indexOf(']')+1))
                    inputTab[i] = inputTab[i].slice(inputTab[i].indexOf('['),inputTab[i].indexOf(']')+1)
                */ }

                else if (!isNaN(parseInt(inputTab[i])))
                    inputTab[i] = Number(inputTab[i])
                else 
                    inputTab[i] = inputTab[i]
        }
    }
            
            this.setState({
                
                inputData: inputTab
            }) 
        }
    
    }

    addExercice=()=>{
        
        this.setState({
            exerciceArray:this.state.exerciceArray.concat(Object.assign({titre:'Exercice '+Number(this.state.exerciceArray.length+1)})),
            activeIndex:this.state.exerciceArray.length,
            content:'',
            testTab:[]
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
        <div className='ajouter-exercice'>
                <ul className="nav nav-tabs">
                    {this.state.exerciceArray.map((el, i) => (
                        <li className="nav-item exercice-item" key={i} onClick={() => this.onClickExerciceItem(i)}>
                            <span className="nav-link" style={{ color: this.state.activeIndex === i ? "#007bff" : "" }}>{el.titre}</span>
                        </li>
                    ))}
                    <li className="nav-item" onClick={this.addExercice}>
                        <span className="nav-link nav-tab-add-btn" >+</span>
                    </li>

                </ul>
            <div style={{display:'flex'}}> 
                
                <div className="ajouter-enonce">
           
                    <textarea value={this.state.content} style={{width:'100%'}}name='content'  placeholder='Enoncé'onChange={this.handleChange} />
                    
                </div>

                <div className="ajouter-test">
                    <h4 style={{color:'black'}}>Test</h4>
                    <div className = 'test-container'>
                        <div className='tests'>
                            <input type="text" className="form-control inputdata" placeholder="Données (sous format a,b,...)" value={this.state.inputData} name='inputData' onChange={this.handleInputChange} />
                            <input type="text" className="form-control outputdata" placeholder="Résultat attendu" name='outputData' value={this.state.outputData} onChange={this.handleChange} />
                           
                            <div className='add-test-buttons'>
                                <button type="button" className="btn btn-outline-primary add-test-btn btn-sm" onClick={this.addTest}>Ajouter</button>
                                <button type="button" className="btn btn-outline-success btn-sm" data-toggle="modal" data-target="#exampleModalLong">Afficher</button>
                                <ModalTest testTab={this.state.exerciceArray[this.state.activeIndex].testTab}/>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        )}
}



const mapDispatchToProps = dispatch => {
    return {
        updateExercice: (exercice) => {
            dispatch({
                type: "UPDATE_EXERCICE",
                exercice
            })
        },

        setExerciceArray: (exerciceArray) => {
            dispatch({
                type: "SET_EXERCICE_ARRAY",
                exerciceArray
            })
        }
        
    }
}

const AjouterExerciceContainer = connect(null, mapDispatchToProps)(AjouterExercice)

export default AjouterExerciceContainer
