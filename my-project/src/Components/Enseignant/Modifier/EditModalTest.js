import React from 'react'
import {connect} from 'react-redux'

class EditModalTest extends React.Component {
    constructor (props){
        super(props)
        this.state={
            isEditable:false,
            index : -1,
            testTab:this.props.testTab,
            inputData:'',
            expectedOutput:'',       
    }
}


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    editField = (i) => {
        //console.log(this.state.testTab[i])
        this.setState({
            isEditable : true,
            index : i,
            inputData:this.props.testTab[i].input.join(),
            expectedOutput:this.props.testTab[i].expectedOutput
        })
    }


    handleOutputChange = (e) => {
        
        this.setState({
            expectedOutput: e.target.value,
            testTab:this.state.testTab.map((el,i)=>{
                if(i===this.state.index){
                    return Object.assign(el,{expectedOutput:e.target.value})
                }
                else return el
            })
            
        })
    }


    handleInputChange=(e)=>{
        
        let inputString = e.target.value
        if (inputString.length>0)
       {
            let inputTab = inputString.split(',')
            for (let i=0;i<inputTab.length;i++){
                if (inputTab[i].toLowerCase().trim()==='true') 
                    inputTab[i]= true
                else if ((inputTab[i].toLowerCase().trim() === 'false'))
                    inputTab[i] = false
                else if (!isNaN(parseInt(inputTab[i])))
                    inputTab[i] = Number(inputTab[i])
                else 
                    inputTab[i] = inputTab[i]
        }

        
            
            this.setState({
                
                inputData:  inputTab,
                testTab:this.state.testTab.map((el,i)=>{
                    if(i===this.state.index){
                        return Object.assign(el,{input:inputTab})
                    }
                    else return el
                })
            }) 
        }
    }

    saveChanges=()=>{
    
        this.setState({
            isEditable:false,
            

        })

        this.props.setTests(this.state.testTab)
    }
    
    
    render () {
      
        return(
            <div class="modal" id="edit-modal" tabindex="-1" role="dialog" >
                <div class="modal-dialog modal-lg" role="document" >
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Tests</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Données</th>
                                        <th scope="col">Résultat attendu</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.testTab.map((el, i) => {
                                        return (
                                            <tr>
                                                <th scope="row">{i + 1}</th>
                                                <td>
                                                    {(this.state.isEditable && this.state.index === i) ?
                                                    <input name='inputData' type='text'  value={this.state.inputData}onChange={this.handleInputChange}/>
                                                    :
                                                    [...el.input].join()}
                                                </td>
                                                <td>
                                                    {(this.state.isEditable && this.state.index === i) ?
                                                    <input name='expectedOutput' type='text'  value={this.state.expectedOutput}onChange={this.handleOutputChange}/>
                                                    :
                                                    el.expectedOutput}
                                                </td>
                                                <td><i className="far fa-edit" onClick={()=>this.editField(i)}></i></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" onClick={this.saveChanges} data-dismiss="modal">Save changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        setTests: (testTab) => {
            dispatch({
                type: "SET_TESTS",
                testTab
            })
        }        
    }
}

const EditModalTestContainer = connect(null, mapDispatchToProps)(EditModalTest)


export default EditModalTestContainer