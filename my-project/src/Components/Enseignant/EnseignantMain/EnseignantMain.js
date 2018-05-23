import React from 'react'
import './EnseignantMain.css'

class EnseignantMain extends React.Component {
    render (){
        return (
            <div className="enseignant-main-container">
                <div className = "Filtres" >
                  <select class="custom-select" id="inputGroupSelect01">
                     <option selected>Matières</option>
                     <option value="1">JavaScript</option>
                     <option value="2">PHP</option>
                     <option value="3">C++</option>
                   </select>
                     <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Classes</option>
                        <option value="1">LFI1</option>
                        <option value="2">LFI2</option>
                        <option value="3">LFI3</option>
                     </select>
                </div>

                <div className="exams-card">
                    <div class="card text-center">
                        <div class="card-header">
                            Examen 1
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <input type='button' class="btn btn-primary" value="Accéder" />
                        </div>
                        <div class="card-footer text-muted">
                            Durée : 2 heures
                        </div>
                    </div>

                    <div class="card text-center">
                        <div class="card-header">
                            Examen 2
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <input type='button' class="btn btn-primary" value="Accéder" />
                        </div>
                        <div class="card-footer text-muted">
                            Durée : 2 heures
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default EnseignantMain;