import React from "react";

class Winner extends React.Component{

    render(){
        return(
            <div className="wins">
				<h3>Wins:</h3>
				<p>{this.props.wins}</p>
			</div>
        )
    }

}
export default Winner