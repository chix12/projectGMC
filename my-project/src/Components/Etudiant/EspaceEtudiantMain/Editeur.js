//var React = require('react');
import React from 'react'
import CodeMirror from "react-codemirror"
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import './Editeur.css'

class Editeur extends React.Component {

    constructor(props){
        super(props)
        this.state={
            code:`function sum = (a, b) => {return a + b}`
        
        }
    } 


	updateCode= (newCode)=> {
        const localStorage = window.localStorage

		this.setState({
			code: newCode,
        });
        
        localStorage.setItem('code', JSON.stringify(newCode))
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