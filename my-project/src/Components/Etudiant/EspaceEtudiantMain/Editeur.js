//var React = require('react');
import React from 'react'
import CodeMirror from "react-codemirror"
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/jsx/jsx'
import './Editeur.css'

class Editeur extends React.Component {

    constructor(props){
        super(props)
        this.state={
            code:``
        
        }
    } 


	updateCode= (newCode)=> {
        const localStorage = window.localStorage

		this.setState({
			code: newCode,
        });
        
        localStorage.setItem('code', newCode)
    }
  
    render() {
        let options = {
            lineNumbers: true,
            mode: 'jsx'
        };
        return <CodeMirror value={localStorage.getItem('code')} onChange={this.updateCode} options={options} />
    }	
}

export default Editeur