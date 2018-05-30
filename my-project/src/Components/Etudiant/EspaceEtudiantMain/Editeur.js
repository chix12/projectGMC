//var React = require('react');
import React from 'react'
import CodeMirror from "react-codemirror"
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'

class Editeur extends React.Component {

    constructor(props){
        super(props)
        this.state={
            code:`
  function Somme (a,b){
     return a+b
    }`
        
        }
    } 


	updateCode= (newCode)=> {
		this.setState({
			code: newCode,
		});
    }
  
    render() {
        let options = {
            lineNumbers: true,
            mode: 'jsx'
        };
        return <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
    }



       
	
}

export default Editeur