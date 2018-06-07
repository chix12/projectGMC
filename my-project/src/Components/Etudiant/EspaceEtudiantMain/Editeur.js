import React from 'react'
import './Editeur.css'
import MonacoEditor from 'react-monaco-editor'

class Editeur extends React.Component {

    constructor(props){
        super(props)
        this.state={
            //codeList: localStorage.getItem('codeList')
            codeList:[]
        }
    } 


	updateCode= (newCode)=> {
        const localStorage = window.localStorage

		this.setState({
            codeList: this.codeList.map((el,i)=>{
                if(this.props.index===i){
                    return newCode
                }
                else return el
            }),
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
                options={options}
                onChange={this.updateCode}
                editorDidMount={this.editorDidMount}
            />
        );
    }
}

export default Editeur