import React from "react";
import './CurrentScore.css';

class CurrentScore extends React.Component{
    render(){
        return(
           <div className="currentScore">
               <h4>Current:</h4>
               <p>{this.props.currentScore}</p>
           </div> 
        )
    }
}
export default CurrentScore