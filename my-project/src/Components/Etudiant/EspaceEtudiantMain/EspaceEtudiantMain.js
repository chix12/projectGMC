import React from 'react'
import './EspaceEtudiantMain.css'
import ModalComponent from './ModalComponent'



class EspaceEtudiantMain extends React.Component{
   
    render(){
        return (
        <div className='etudiant-main' >
            <div className='etudiant-main-content'>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Exercice 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Exercice 2</a>
                    </li>
                    
                </ul>
                <div className='etudiant-probleme-test-code'>
                    <div className='etudiant-probleme-test'>
                        <div className='etudiant-probleme'>

                            <h3>Enoncé </h3>
                        </div>

                        <div className='etudiant-test'>

                            <h3>Test </h3>
                        </div>
                    </div>

                    <div className='etudiant-code'>
                        <h3>Code </h3>
                        <code contenteditable="true" >//write your code here</code>
                    </div>

                </div>  
                <div className='etudiant-buttons'>  
                    <button type="button" class="btn btn-outline-primary btn-executer">Exécuter les tests</button>
                    <button type="button" class="btn btn-outline-success"  data-toggle="modal" data-target="#exampleModal">Valider</button>

                  <ModalComponent/> 
                </div>
    

               

               
            </div>


</div>








      )
    }
}

export default EspaceEtudiantMain
    