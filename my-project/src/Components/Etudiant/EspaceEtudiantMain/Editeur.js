import React from 'react'
import './Editeur.css'
import MonacoEditor from 'react-monaco-editor'
import {connect} from 'react-redux'

class Editeur extends React.Component {

    constructor(props){
        super(props)
        this.state={
            //codeList: localStorage.getItem('codeList')
            codeList:JSON.parse(localStorage.getItem('codeList')),
            //code: localStorage.getItem('code')
            code:''
        }
    } 


    componentDidUpdate(){
        
        this.props.setCodeList(this.state.codeList)
    }

  
	updateCode= (newCode)=> {
       
       
		this.setState({
            code: newCode,
            codeList:this.state.codeList.map((el,i)=>{
               
                if(i===this.props.index){
                   
                    return Object.assign(this.state.codeList[this.props.index],{code: newCode})
                }
                else return el
            })
        });
        
        localStorage.setItem('code', newCode)
        //localStorage.setItem('codeList', codeTab)
    }
  
    render() {
        //console.log('codeList',this.state.codeList)
        if(!localStorage.getItem('codeList').code){  
            let codeTab=[]
            for(let i=0;i<this.props.nbrExercice;i++){
                codeTab[i]={exercice:'exercice '+Number(i+1),code:''}
            }
           localStorage.setItem('codeList',JSON.stringify(codeTab))
        }
 
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




const mapDispatchToProps = dispatch => {
    return {
        

        setCodeList: (codeList) => {
            dispatch({
                type: "SET_CODE_LIST",
                codeList
            })
        }
        
    }
}

const EditeurContainer = connect(null, mapDispatchToProps)(Editeur)

export default EditeurContainer