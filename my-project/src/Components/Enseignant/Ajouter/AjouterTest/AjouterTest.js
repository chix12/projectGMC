import React from 'react'
import IOComponent from './IOComponent';
import './AjouterTest.css'

class AjouterTest extends React.Component {

    constructor(props){
        super(props)
        
    }

    addTest(){
       
    }

    render() {
        return(
            <div className='test-container'> 
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Données</th>
                        <th scope="col">Résultat</th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                
                    <td></td>
                    <td  className="tr-add-btn"><button type="button" className="test-add-button"onClick={this.addTest}> +</button></td>
             
                    <IOComponent />
                </tbody>
            </table>
            </div>
        )
    }
}

export default AjouterTest