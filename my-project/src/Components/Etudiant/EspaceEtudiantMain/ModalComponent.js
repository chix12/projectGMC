import React from 'react'


class ModalComponent extends React.Component {

  constructor(props){
    super(props)
    this.state={
      intervalCounter:0,
      points:0,   
      intervalResult:0,
      height:200,
      nbrTest:this.props.nbrTest,
      grade:0
    }
} 

  counter=()=>{
    
    this.setState({
      intervalCounter:setInterval(
        ()=>{
          this.setState({
            points:this.state.points+1
          })
        }
      ,80)
    })
  
  }


  getResult=()=>{
    this.setState({
      intervalResult:setInterval(
        ()=>{
          this.setState({
            height:this.state.height-10
          })
        }
      ,80)
    })

    setTimeout(()=>this.counter(),900)
    
  }


 /* getGrade=()=>{
    if(this.props.nbrTest!==undefined){
    this.setState({
      grade:Math.floor(20/this.state.nbrTest.length)
    })
  }
  }*/


  render(){
//console.log('length',this.props.nbrTest)

  if(this.state.points===17){
    clearInterval(this.state.intervalCounter)
   
  }

  if(this.state.height===0){
    clearInterval(this.state.intervalResult)
  }

   return (
    <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel"></h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>


              <div className="modal-body">


              <div className="bg-primary" onClick={this.getResult} style={{color:'white',zIndex:100, width:'100%',height:this.state.height,position:'absolute',top:0,left:0}}>
              <h3 style={{textAlign:'center',margin:'50px'}}>Votre Résultat</h3>
              <div style={{textAlign:'center',marginTop:'68px'}}>
                <i className="fas fa-arrow-down fa-lg" style={{marginRight:'10px'}}></i>
                <i className="fas fa-arrow-down fa-lg" style={{marginRight:'10px'}}></i>
                <i className="fas fa-arrow-down fa-lg" style={{marginRight:'10px'}}></i>
              </div>


              
              </div>
                  <div className='modal-result'>
                    
                    <h1 className='modal-result-points'>{this.state.points} points </h1>
                  </div>
                
                  
              </div>
              <div className="modal-footer">
                {/*<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal">Terminé</button>*/}
              </div>
            </div>
          </div>
        </div>
    

</div>


   )
 }
}


export default ModalComponent
    