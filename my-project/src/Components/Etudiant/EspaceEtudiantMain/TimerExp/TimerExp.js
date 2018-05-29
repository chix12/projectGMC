import React from "react";
import TimeExp from "./TimeExp";
import './TimerExp.css'


class TimerExp extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        timer: Number(this.props.duree)*60*1000
        
        
      };
      setInterval(() => {
        if(this.state.timer===0) return;
        this.setState({
          timer: this.state.timer - 1000
        });
      }, 1000)
    }
    
   
   


   
    render() {
     
      return (
        <div>
          <TimeExp ms={this.state.timer} />

        </div>
      );
    }
  }

  export default TimerExp