import React from 'react'

class EditModalTest extends React.Component {
    render () {
        return(
            <div class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
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
                                    {/*this.props.testTab ? this.props.testTab.map((el, i) => {
                                        return (
                                            <tr>
                                                <th scope="row">{i + 1}</th>
                                                <td>{[...el.input].join()}</td>
                                                <td>{el.expectedOutput}</td>
                                                <td><i className="far fa-edit" ></i></td>
                                            </tr>
                                        )
                                    }) : ''*/}
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