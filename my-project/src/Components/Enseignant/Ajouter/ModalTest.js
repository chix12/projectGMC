import React from 'react'

class ModalTest extends React.Component{
    render(){
        
        return (
        <div>
           
        
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Tests</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Données</th>
                            <th scope="col">Résultat attendu</th>


                            </tr>
                        </thead>
                        <tbody>
                            {/*this.props.testTab.length===0?this.props.testTab.map((el,i)=>{
                            <tr>
                                <th scope="row">11</th>
                                <td>{[...el.input]}</td>
                                <td>{el.expectedOutput}</td>
                                
                            </tr>
                           

                            }):""*/}


                           {this.props.testTab?this.props.testTab.map((el,i)=>{
                               return (
                               <tr>
                                    <th scope="row">{i+1}</th>
                                    <td>{[...el.input].join()}</td>
                                    <td>{el.expectedOutput}</td>
                                    {/*<td><i className="far fa-edit" ></i></td>*/}
                                </tr>
                            )
                                }):''}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        </div>
        )
    }

}

export default ModalTest