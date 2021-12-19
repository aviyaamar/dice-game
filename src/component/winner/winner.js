import React from "react";
import './winner.css'

class Winner extends React.Component{

    render(){
        return(
            <div className="wins">
				<h3>Number Of Wins:</h3>
				<p>{this.props.winner}</p>
			</div>
        )
    }

}
export default Winner