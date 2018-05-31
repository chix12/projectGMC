import React from 'react'
import IOComponent from './IOComponent';
import './AjouterTest.css'

class AjouterTest extends React.Component {

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
                    <tr><button type="button" className="test-add-button">+</button></tr>
                    <IOComponent />
                </tbody>
            </table>
            </div>
        )
    }
}

export default AjouterTest