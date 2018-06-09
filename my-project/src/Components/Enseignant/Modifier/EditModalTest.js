import React from 'react'

class EditModalTest extends React.Component {
    constructor (props){
        super(props)
        this.state={
            isEditable:false,
            index : -1,
            inputData: ''
    }
}


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    editField = (i) => {
        this.setState({
            isEditable : true,
            index : i
        })
    }
    
    render () {
        return(
            <div class="modal" id="edit-modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
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
                                    {this.props.testTab ? this.props.testTab.map((el, i) => {
                                        return (
                                            <tr>
                                                <th scope="row">{i + 1}></th>
                                                <td>{(this.state.isEditable && this.state.index === i)?
                                                    <input name='inputData' type='text' value={[...el.input].join()} onChange={this.handleChange}/>
                                                    :[...el.input].join()}</td>
                                                <td>{el.expectedOutput}</td>
                                                <td><i className="far fa-edit" onClick={()=>this.editField(i)}></i></td>
                                            </tr>
                                        )
                                    }) : ''}
                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Save changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditModalTest