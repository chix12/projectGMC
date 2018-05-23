import React from 'react'

class Etudiant extends React.Component{
    render(){
        return(
            <div className="etudiant-container">
                <div className="Filtres" >
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
            </div>
        )
    }
}

export default Etudiant