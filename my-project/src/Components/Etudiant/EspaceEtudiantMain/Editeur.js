import CodeMirror from "react-codemirror"
import React from 'react'


const Editeur=()=>{


return <div><CodeMirror value={`
                let x=12
                console.log(x)

                `}
                options={{mode:'jsx',lineNumbers:true,tabSize:2}} 
                
                />
                </div>

}

export default Editeur

