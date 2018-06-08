//var React = require('react');
import React from 'react'
//import CodeMirror from "react-codemirror"
//import 'codemirror/lib/codemirror.css'
//import 'codemirror/mode/jsx/jsx'
import './Editeur.css'
import MonacoEditor from 'react-monaco-editor'

class Editeur extends React.Component {

    constructor(props){
        super(props)
        this.state={
            code: localStorage.getItem('code')
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
        /*let options = {
            lineNumbers: true,
            mode: 'javascript'
        };
        return <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />*/

        const code = this.state.code;
        const options = {
            selectOnLineNumbers: true
        };
        return (
            <MonacoEditor
                width="100%"
                height="500"
                language="javascript"
                //theme="vs-dark"
                // value={localStorage.getItem('code')}
               value = {this.state.code}
                options={{selectOnLineNumbers: true}}
                onChange={this.updateCode}
                editorDidMount={this.editorDidMount}
            />
        );
    }
}

export default Editeur