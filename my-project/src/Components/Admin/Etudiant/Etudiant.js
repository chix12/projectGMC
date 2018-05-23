import React from 'react'
import './Etudiant.css'

class Etudiant extends React.Component{
    render(){
        return(
            <div className="etudiant-container">
                <div className="filtres" >
                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Classes</option>
                        <option value="1">LFI1</option>
                        <option value="2">LFI2</option>
                        <option value="3">LFI3</option>
                    </select>

                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Groupes</option>
                        <option value="1">G1</option>
                        <option value="2">G2</option>
                        <option value="3">G3</option>
                    </select>
                </div>
                <div className='etudiant-table'>
                    <div className="admin-etudiant-button">
                        <button type="button" class="admin-add-button">+</button>
                    </div>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">N°Insc</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Prenom</th>
                                <th scope="col">Classe</th>
                                <th scope="col">Voucher</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mot de passe</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>John</td>
                                <td>Doe</td>
                                <td>LFI1</td>
                                <td>XXXX</td>
                                <td>John@Doe.com</td>
                                <td>123456</td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Baklouti</td>
                                <td>Nada</td>
                                <td>LFI2</td>
                                <td>XXXY</td>
                                <td>Bak@nada.com</td>
                                <td>XXXX</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Chaima</td>
                                <td>Zelaiti</td>
                                <td>LFI3</td>
                                <td>XXYY</td>
                                <td>Zel@chaima.com</td>
                                <td>XXXX</td>

                            </tr>
                        </tbody>
                    </table>
                    
                </div>

            </div>
        )
    }
}

export default Etudiant