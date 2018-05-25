import React from 'react'
import './Login.css'

const RadioButton=()=>{
    return(
<div >
    <label> Vous êtes : </label>
<div class="btn-group btn-group-toggle radio-button-comp" data-toggle="buttons">

  <label class="btn btn-light active radio-button">
    <input type="radio" name="options" id="option1" autocomplete="off" checked/> Etudiant
  </label>
  <label class="btn btn-light radio-button">
    <input type="radio" name="options" id="option2" autocomplete="off"/> Enseignant
  </label>
  
</div>
</div>
    )
}

export default RadioButton