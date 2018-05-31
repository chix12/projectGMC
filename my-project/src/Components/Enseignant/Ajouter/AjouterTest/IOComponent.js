import React from 'react'

class IOComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            inputTab : [],
            outputData : "",
            inputData  : ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addInput = () => {
        this.setState({
            inputTab : this.state.inputTab.concat(this.state.inputData)
        })
        
    }

    render(){
        console.log(this.state.outputData)
        return (
                <tr>
                    <td>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Données" value = {this.state.inputData} name='inputData' onChange={this.handleChange} />
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" onClick = {() => {
                                    this.addInput()
                                    this.setState({
                                        inputData : ""
                                    })
                                }
                            }>
                            +
                            </button>
                            </div>
                        </div>
                    </td>
                <td>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Résultat attendu" name='outputData' onChange={this.handleChange} />
                    </div>
                </td>
                </tr>

        )
    }
}

export default IOComponent